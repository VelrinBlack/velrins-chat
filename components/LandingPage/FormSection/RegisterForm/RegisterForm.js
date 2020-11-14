import { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import axios from 'axios';

import { signIn } from '../../../../redux/actions/userActions';

const RegisterForm = ({ changeToLogin }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
      case 'surname':
        return setSurname(target.value);
      case 'email':
        return setEmail(target.value);
      case 'password':
        return setPassword(target.value);
      case 'repeatPassword':
        return setRepeatPassword(target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setEmailError(!validator.isEmail(email));
    } else {
      setEmailError(false);
    }

    if (password) {
      setPasswordError(password.length < 7 || password.length > 20);
    } else {
      setPasswordError(false);
    }

    if (repeatPassword) {
      setRepeatPasswordError(password !== repeatPassword);
    } else {
      setRepeatPasswordError(false);
    }

    setEmptyFields(!name || !surname || !email || !password || !repeatPassword);

    if (
      validator.isEmail(email) &&
      password.length >= 7 &&
      password.length <= 20 &&
      password === repeatPassword &&
      name &&
      surname &&
      email &&
      password &&
      repeatPassword
    ) {
      setServerResponse('loading');

      axios
        .post(`${process.env.BACKEND_URL}/api/user/register`, {
          name,
          surname,
          email,
          password,
        })
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token);
            dispatch(signIn({ token: res.data.token }));
          } else if (res.data === 'User already exists') {
            setServerResponse('User already exists');
          } else {
            setServerResponse('error');
          }
        })
        .catch(() => {
          setServerResponse('error');
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          onChange={handleInputChange}
          value={name}
        />
        <input
          type='text'
          placeholder='Surname'
          name='surname'
          onChange={handleInputChange}
          value={surname}
        />
      </div>

      <input
        type='text'
        placeholder='Email'
        name='email'
        onChange={handleInputChange}
        value={email}
      />
      {emailError ? <p className='emailError'>Email is not valid</p> : null}

      <input
        type='password'
        placeholder='Password'
        name='password'
        onChange={handleInputChange}
        value={password}
      />
      {passwordError ? (
        <p className='passwordError'>Password must contain from 7 to 20 characters</p>
      ) : null}

      <input
        type='password'
        placeholder='Repeat password'
        name='repeatPassword'
        onChange={handleInputChange}
        value={repeatPassword}
      />

      {repeatPasswordError ? <p className='repeatPasswordError'>Passwords don't match</p> : null}

      {emptyFields ? <p className='emptyFieldsError'>Please fill empty fields</p> : null}

      <button type='submit' aria-label='submit' style={!emptyFields ? { marginTop: '30px' } : null}>
        <span>Sign up</span>
      </button>

      {serverResponse === null ? null : serverResponse === 'loading' ? (
        <div className='loading'>
          <div className='dot1'></div>
          <div className='dot2'></div>
          <div className='dot3'></div>
        </div>
      ) : serverResponse === 'User already exists' ? (
        <div className='error'>
          <img src='/images/error.svg' alt='error' />
          <p>
            User already exists <span onClick={changeToLogin}>Sign in</span>
          </p>
        </div>
      ) : (
        <div className='error'>
          <img src='/images/error.svg' alt='error' />
          <p>Something went wrong</p>
        </div>
      )}

      {serverResponse === null ? (
        <p>
          Already have an account? <span onClick={changeToLogin}>Sign in</span>
        </p>
      ) : null}
    </form>
  );
};

export default RegisterForm;
