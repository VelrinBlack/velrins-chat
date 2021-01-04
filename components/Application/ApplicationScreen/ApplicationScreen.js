import { useEffect, useContext, useState, createRef } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';

import ApplicationScreenStyles from './ApplicationScreenStyles';
import NavigationCard from './NavigationCard/NavigationCard';
import CreateChatForm from './CreateChatForm/CreateChatForm';
import Message from './Message/Message';
import SendMessageForm from './SendMessageForm/SendMessageForm';
import Context from '../../../Context';

const ApplicationScreen = () => {
  const logOut = useContext(Context).logOut;
  const token = useContext(Context).token;

  const [user, setUser] = useState(null);
  const [chats, setChats] = useState(null);
  const [activeChat, setActiveChat] = useState(null);

  const messagesEndRef = createRef();

  useEffect(async () => {
    const res1 = await axios.get(`${process.env.BACKEND_URL}/api/users/getOne`, {
      headers: { 'x-auth-token': token },
    });
    const user = res1.data.user;
    setUser(user);

    const res2 = await axios.get(`${process.env.BACKEND_URL}/api/chats`, {
      headers: { 'x-auth-token': token },
    });
    const chats = res2.data.chats;
    setChats(chats);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [activeChat, chats]);

  useEffect(() => {
    const pusher = new Pusher('46413e396849fbb5ff63', {
      cluster: 'us3',
    });

    const channel = pusher.subscribe('messages');

    channel.bind('send-message', (data) => {
      if (user.id === data.message.user) return;

      const chatIndex = chats.findIndex((chat) => chat._id === data.chatId);
      let newChats = [...chats];

      if (newChats[chatIndex]) {
        newChats[chatIndex].messages.push(data.message);
        setChats(newChats);
      }
    });

    return () => {
      channel.unbind('send-message');
      pusher.unsubscribe('messages');
    };
  }, [chats]);

  return (
    <ApplicationScreenStyles>
      <nav>
        <header>
          <button className='logout' onClick={logOut}>
            <img src='/images/logout.svg' alt='logout' />
          </button>

          <div className='container'>
            <img src='/images/profile.png' alt='user' />
            <h2>{user && `${user.name} ${user.surname}`}</h2>
          </div>
        </header>

        <ul>
          {!chats && (
            <div className='loading'>
              <div className='dot1'></div>
              <div className='dot2'></div>
              <div className='dot3'></div>
            </div>
          )}

          {chats &&
            chats
              .slice()
              .reverse()
              .map((chat) => {
                const cardUser = chat.users.find(({ _id }) => _id !== user.id);

                return (
                  <div key={chat._id}>
                    <NavigationCard
                      cardUser={cardUser}
                      messages={chat.messages}
                      setActiveChat={setActiveChat}
                      setChats={setChats}
                      id={chat._id}
                    />
                  </div>
                );
              })}
        </ul>

        <CreateChatForm setChats={setChats} />
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
                  id={message._id}
                />
              ))}

              <div ref={messagesEndRef}></div>
            </section>

            <SendMessageForm
              chatId={activeChat.id}
              userId={user.id}
              setChats={setChats}
              activeChat={activeChat}
              chats={chats}
            />
          </>
        ) : (
          <img src='/images/chat.svg' alt='chat' className='chat_placeholder' />
        )}
      </main>
    </ApplicationScreenStyles>
  );
};

export default ApplicationScreen;
