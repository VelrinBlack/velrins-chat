import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import ActivationScreenStyles from './ActivationScreenStyles';
import Context from '../../../Context';

const ActivationScreen = ({ email }) => {
  const forceUpdate = useContext(Context).forceUpdate;

  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [serverResponse, setServerResponse] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/user/send-verification-mail`, {
        token,
      })
      .catch(() => {});
  }, []);

  const handleLogOutButtonClick = () => {
    localStorage.removeItem('token');
    forceUpdate();
  };

  const handleInputChange = ({ target: { value } }) => {
    if (value.length <= 5) {
      setInputValue(value.replace(/[^0-9]/, ''));
    }
  };

  const handleResendButtonClick = ({ target }) => {
    if (target.textContent === 'Resend my code') {
      target.textContent = 'Code sent one more time!';
      target.style.cursor = 'grab';

      axios
        .post(`${process.env.BACKEND_URL}/api/user/send-verification-mail`, {
          token,
          force: true,
        })
        .catch(() => {});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length === 0) {
      return setError('Please, enter activation code');
    } else if (inputValue.length !== 5) {
      return setError('Activation code is too short');
    } else {
      setError('');
    }

    setServerResponse('loading');
  };

  return (
    <ActivationScreenStyles buttonMargin={error ? '0px' : '60px'}>
      <div className='imageContainer'>
        <img src='/images/mailbox.svg' alt='mailbox' />
      </div>

      <div className='contentContainer'>
        <button className='logOut' onClick={handleLogOutButtonClick}>
          Log out
        </button>

        <h1>
          Check your mailbox <div className='underline'></div>
        </h1>

        <p>
          We've sent verification code to <br />
          <b>{email}</b>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter the code'
            value={inputValue}
            onChange={handleInputChange}
          />

          <button type='button' className='resend' onClick={handleResendButtonClick}>
            Resend my code
          </button>

          {error ? <p className='validationError'>{error}</p> : null}

          {serverResponse === null ? (
            <button type='submit' className='submit' aria-label='submit'>
              Confirm
            </button>
          ) : serverResponse === 'loading' ? (
            <div className='loading'>
              <div className='dot1'></div>
              <div className='dot2'></div>
              <div className='dot3'></div>
            </div>
          ) : (
            <div className='serverError'>
              <img src='/images/error.svg' alt='error' />
              <p>Something went wrong</p>
            </div>
          )}
        </form>
      </div>
    </ActivationScreenStyles>
  );
};

export default ActivationScreen;
