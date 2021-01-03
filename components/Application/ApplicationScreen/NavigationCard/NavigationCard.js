import { useState } from 'react';

import NavigationCardStyles from './NavigationCardStyles';

const NavigationCard = ({ cardUser: { name, surname }, messages, setActiveChat, id }) => {
  let message = null;
  if (messages.length) {
    message = messages[messages.length - 1].content;
  }

  const [modalActive, setModalActive] = useState(false);

  return (
    <NavigationCardStyles
      onClick={({ target }) => {
        if (
          target.className !== 'removeChatButtonImg' &&
          target.className !== 'no' &&
          target.className !== 'yes'
        ) {
          setActiveChat({ name, surname, messages, id });
        }
      }}
    >
      <img src='/images/profile.png' alt='user' className='profileImg' />

      <div>
        <h3>
          {name} {surname}
        </h3>
        {message && <p>{message.length > 25 ? `${message.substring(0, 25)}...` : message}</p>}
      </div>

      <button onClick={() => setModalActive(true)}>
        <img src='/images/close.svg' alt='Remove chat icon' className='removeChatButtonImg' />
      </button>

      {modalActive && (
        <div className='modalBackground'>
          <div className='modal'>
            <h2>
              Are you sure you want to delete chat with {name} {surname}?
            </h2>

            <div>
              <button className='no' onClick={() => setModalActive(false)}>
                No
              </button>
            </div>

            <div>
              <button className='yes'>Yes</button>
            </div>
          </div>
        </div>
      )}
    </NavigationCardStyles>
  );
};

export default NavigationCard;
