import { useState } from 'react';

const RegisterForm = ({ changeToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emptyFields, setEmptyFields] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null);

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
      console.log('Everything is ok.');
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

      {emptyFields ? (
        <p className='emptyFieldsError'>Please fill empty fields</p>
      ) : null}

      {requestStatus === 'loading' ? (
        <div className='loading'>
          <div className='dot1'></div>
          <div className='dot2'></div>
          <div className='dot3'></div>
        </div>
      ) : requestStatus === 'error' ? (
        <div className='error'>
          <img src='/images/error.svg' alt='error' />
          <p>Something went wrong.</p>
        </div>
      ) : (
        <button
          type='submit'
          aria-label='submit'
          style={!emptyFields ? { marginTop: '30px' } : null}
        >
          <span>Sign up</span>
        </button>
      )}

      <p>
        Don't have an account? <span onClick={changeToRegister}>Sign up</span>
      </p>
    </form>
  );
};

export default RegisterForm;
