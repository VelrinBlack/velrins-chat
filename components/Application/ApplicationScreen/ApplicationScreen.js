import { useEffect, useContext, useState, createRef } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';

import ApplicationScreenStyles from './ApplicationScreenStyles';
import NavigationCard from './NavigationCard/NavigationCard';
import CreateChatForm from './CreateChatForm/CreateChatForm';
import Message from './Message/Message';
import SendMessageForm from './SendMessageForm/SendMessageForm';
import Settings from './Settings/Settings';
import Context from '../../../Context';

const ApplicationScreen = () => {
  const logOut = useContext(Context).logOut;
  const token = useContext(Context).token;

  const [user, setUser] = useState(null);
  const [chats, setChats] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [settingsActive, setSettingsActive] = useState(false);

  const messagesEndRef = createRef();

  useEffect(async () => {
    const res1 = await axios.get(`${process.env.BACKEND_URL}/api/users/getOne`, {
      headers: { 'x-auth-token': token },
    });
    setUser(res1.data.user);

    const res2 = await axios.get(`${process.env.BACKEND_URL}/api/chats`, {
      headers: { 'x-auth-token': token },
    });
    setChats(res2.data.chats);

    const pusher = new Pusher('46413e396849fbb5ff63', {
      cluster: 'us3',
    });

    const channel = pusher.subscribe('messages');

    channel.bind('send-message', (data) => {
      setChats((chats) => {
        const chatIndex = chats.findIndex((chat) => chat._id === data.chatId);
        let newChats = [...chats];

        newChats[chatIndex].messages.push(data.message);
        return newChats;
      });
    });

    return () => {
      channel.unbind('send-message');
      pusher.unsubscribe('messages');
    };
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
          <button className='logout' onClick={logOut}>
            <img src='/images/logout.svg' alt='logout' />
          </button>

          <button className='open_settings' onClick={() => setSettingsActive(true)}>
            <img src='/images/settings.svg' alt='settings' />
          </button>

          {user && (
            <div className='container'>
              <img src={user.image || '/images/profile.png'} alt='user' />
              <h2>
                {user.name} {user.surname}
              </h2>
            </div>
          )}
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
          </>
        ) : (
          <img src='/images/chat.svg' alt='chat' className='chat_placeholder' />
        )}
      </main>

      {settingsActive && (
        <Settings user={user} setUser={setUser} setSettingsActive={setSettingsActive} />
      )}
    </ApplicationScreenStyles>
  );
};

export default ApplicationScreen;
