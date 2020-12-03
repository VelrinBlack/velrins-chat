import { useState, useContext } from 'react';
import axios from 'axios';

import Context from '../../../../Context';

const RegisterForm = ({ changeToRegister }) => {
  const forceUpdate = useContext(Context).forceUpdate;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emptyFields, setEmptyFields] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'email':
        return setEmail(target.value);
      case 'password':
        return setPassword(target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmptyFields(!email || !password);

    if (email && password) {
      setServerResponse('loading');

      axios
        .post(`${process.env.BACKEND_URL}/api/user/login`, {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          forceUpdate();
        })
        .catch((err) => {
          if (err.response.data.message === 'Invalid email or password') {
            return setServerResponse('Invalid email or password');
          }

          setServerResponse('error');
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Email'
        name='email'
        onChange={handleInputChange}
        value={email}
      />

      <input
        type='password'
        placeholder='Password'
        name='password'
        onChange={handleInputChange}
        value={password}
      />

      {emptyFields ? <p className='emptyFieldsError'>Please fill empty fields</p> : null}

      <button type='submit' aria-label='submit' style={!emptyFields ? { marginTop: '30px' } : null}>
        <span>Sign in</span>
      </button>

      {serverResponse === null ? null : serverResponse === 'loading' ? (
        <div className='loading'>
          <div className='dot1'></div>
          <div className='dot2'></div>
          <div className='dot3'></div>
        </div>
      ) : serverResponse === 'Invalid email or password' ? (
        <div className='error'>
          <img src='/images/error.svg' alt='error' />
          <p>
            Invalid email or password <span onClick={changeToRegister}>Sign up</span>
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
          Already have an account? <span onClick={changeToRegister}>Sign up</span>
        </p>
      ) : null}
    </form>
  );
};

export default RegisterForm;
