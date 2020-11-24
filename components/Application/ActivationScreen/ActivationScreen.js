import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import ActivationScreenStyles from './ActivationScreenStyles';

const ActivationScreen = ({ email }) => {
  const token = useSelector((state) => {
    if (state.user) {
      return state.user.token;
    }
  });

  useEffect(() => {
    axios.post(`${process.env.BACKEND_URL}/api/user/sendmail`, {
      token,
    });
  }, []);

  return (
    <ActivationScreenStyles>
      <div className='imageContainer'>
        <img src='/images/mailbox.svg' alt='mailbox' />
      </div>

      <div className='contentContainer'>
        <h1>
          Check your mailbox <div className='underline'></div>
        </h1>

        <p>
          We've sent verification code to <br />
          <b>{email}</b> <br />
          <span>Change email</span>
        </p>

        <form>
          <input type='text' placeholder='Enter the code' />
          <p className='resend'>Resend my code</p>
          <button type='submit'>Confirm</button>
        </form>
      </div>
    </ActivationScreenStyles>
  );
};

export default ActivationScreen;
