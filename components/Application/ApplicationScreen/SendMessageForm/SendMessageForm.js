import { useState, useContext } from 'react';
import axios from 'axios';

import SendMessageFormStyles from './SendMessageFormStyles';
import Context from '../../../../Context';

const SendMessageForm = ({ chatId, userId }) => {
  const token = useContext(Context).token;

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      setInputValue('');
      axios.post(`${process.env.BACKEND_URL}/api/chat/createMessage`, {
        token,
        chatId,
        userId,
        content: inputValue,
      });
    }
  };

  return (
    <SendMessageFormStyles>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Type a message...'
          onChange={handleInputChange}
          value={inputValue}
        />

        <button type='submit'>
          <img src='/images/send.svg' alt='send' />
        </button>
      </form>
    </SendMessageFormStyles>
  );
};

export default SendMessageForm;
