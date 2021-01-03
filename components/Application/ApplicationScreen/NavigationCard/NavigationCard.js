import { useState, useContext } from 'react';
import axios from 'axios';

import NavigationCardStyles from './NavigationCardStyles';
import Context from '../../../../Context';

const NavigationCard = ({ cardUser: { name, surname }, messages, setActiveChat, setChats, id }) => {
  let message = null;
  if (messages.length) {
    message = messages[messages.length - 1].content;
  }

  const token = useContext(Context).token;

  const [modalActive, setModalActive] = useState(false);

  const deleteChat = () => {
    axios
      .delete(`${process.env.BACKEND_URL}/api/chats/${id}`, {
        headers: { 'x-auth-token': token },
      })
      .then(() => {
        setActiveChat(null);
        setModalActive(false);
        setChats((chats) => {
          return chats.filter((chat) => chat._id !== id);
        });
      })
      .catch((err) => {});
  };

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
              <button className='yes' onClick={deleteChat}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </NavigationCardStyles>
  );
};

export default NavigationCard;
