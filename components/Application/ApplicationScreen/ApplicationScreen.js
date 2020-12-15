import { useEffect, useContext, useState, createRef } from 'react';
import axios from 'axios';

import ApplicationScreenStyles from './ApplicationScreenStyles';
import NavigationCard from './NavigationCard/NavigationCard';
import Message from './Message/Message';
import Context from '../../../Context';

const ApplicationScreen = () => {
  const token = useContext(Context).token;

  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  const messagesEndRef = createRef();

  useEffect(async () => {
    const res = await axios.get(`${process.env.BACKEND_URL}/api/user/getOne?token=${token}`);
    setUser(res.data.user);

    const res2 = await axios.get(`${process.env.BACKEND_URL}/api/chat/getAll?token=${token}`);
    setChats(res2.data.chats);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [activeChat]);

  return (
    <ApplicationScreenStyles>
      <nav>
        <header>
          <img src='/images/profile.png' alt='user' />
          <h2>{user && `${user.name} ${user.surname}`}</h2>
        </header>

        <ul>
          {!chats.length && (
            <div className='loading'>
              <div className='dot1'></div>
              <div className='dot2'></div>
              <div className='dot3'></div>
            </div>
          )}

          {chats.map((chat) => {
            const cardUser = chat.users.find(({ _id }) => _id !== user.id);

            return (
              <NavigationCard
                cardUser={cardUser}
                messages={chat.messages}
                setActiveChat={setActiveChat}
                key={chat._id}
              />
            );
          })}
        </ul>
      </nav>

      <main>
        {activeChat ? (
          <>
            <header>
              <img src='/images/profile.png' alt='user' />
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
                />
              ))}

              <div ref={messagesEndRef}></div>
            </section>
          </>
        ) : (
          <img src='/images/chat.svg' alt='chat' className='chat_placeholder' />
        )}
      </main>
    </ApplicationScreenStyles>
  );
};

export default ApplicationScreen;
