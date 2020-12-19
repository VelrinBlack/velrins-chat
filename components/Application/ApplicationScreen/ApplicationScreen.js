import { useEffect, useContext, useState, createRef } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';

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
    const res1 = await axios.get(`${process.env.BACKEND_URL}/api/user/getOne?token=${token}`);
    const user = res1.data.user;
    setUser(user);

    const res2 = await axios.get(`${process.env.BACKEND_URL}/api/chat/getAll?token=${token}`);
    const chats = res2.data.chats;
    setChats(chats);

    const pusher = new Pusher('ed13948a7c4618e48dbc', {
      cluster: 'us3',
    });

    const channel = pusher.subscribe('messages');

    channel.bind('send-message', (data) => {
      const chatIndex = chats.findIndex((chat) => chat._id === data.chatId);

      let newChats = [...chats];
      newChats[chatIndex].messages.push(data.message);

      setChats(newChats);
    });
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [activeChat, chats]);

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
