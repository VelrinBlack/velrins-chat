import { useState } from 'react';

import CreateChatStyles from './CreateChatStyles';

const CreateChatButton = () => {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CreateChatStyles>
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
    </CreateChatStyles>
  );
};

export default CreateChatButton;
