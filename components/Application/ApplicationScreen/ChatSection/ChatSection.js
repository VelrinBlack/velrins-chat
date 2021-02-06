import { useEffect, createRef, useState } from 'react';

import ChatSectionStyles from './ChatSectionStyles';
import SendMessageForm from './SendMessageForm/SendMessageForm';
import Message from './Message/Message';

const ChatSection = ({ activeChat, setActiveChat, user, chats }) => {
  const messagesEndRef = createRef();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', setWindowWidth);
    };
  });

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [activeChat, chats]);

  return (
    <ChatSectionStyles>
      <header>
        {windowWidth <= 768 && (
          <button onClick={() => setActiveChat(null)}>
            <img src='/images/arrow_left.svg' />
          </button>
        )}
        <img src={activeChat.image || '/images/profile.png'} alt='user' />
        <h3>
          {activeChat.name} {activeChat.surname}
        </h3>
      </header>

      <section className='messages_section'>
        {activeChat.messages.map((message) => (
          <Message
            content={message.content}
            time={message.time}
            receiver={user.id !== message.user}
            id={message._id}
          />
        ))}

        <div ref={messagesEndRef}></div>
      </section>

      <SendMessageForm chatId={activeChat.id} userId={user.id} />
    </ChatSectionStyles>
  );
};

export default ChatSection;
