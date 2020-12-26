import { useState, useContext } from 'react';
import axios from 'axios';

import CreateChatFormStyles from './CreateChatFormStyles';
import Context from '../../../../Context';

const CreateChatForm = ({ setChats }) => {
  const token = useContext(Context).token;

  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.BACKEND_URL}/api/chats`, {
        token,
        email: inputValue,
      })
      .then((res) => setChats((chats) => [...chats, res.data]))
      .catch((err) => {});

    setInputValue('');
  };

  return (
    <CreateChatFormStyles>
      {active && (
        <form onSubmit={handleSubmit}>
          <button type='button' className='close' onClick={() => setActive(false)}>
            <img src='/images/close.svg' alt='close' />
          </button>

          <input
            type='text'
            placeholder='Enter email'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button type='submit'>
            <img src='/images/plus.svg' alt='plus' />
          </button>
        </form>
      )}

      {!active && (
        <button className='create-chat' onClick={() => setActive(true)}>
          <img src='/images/plus.svg' alt='plus' />
          <span>Create new chat</span>
        </button>
      )}
    </CreateChatFormStyles>
  );
};

export default CreateChatForm;
