import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';

import NavigationSection from './NavigationSection/NavigationSection';
import ChatSection from './ChatSection/ChatSection';
import Settings from './Settings/Settings';
import Context from '../../../Context';

const ApplicationScreen = () => {
  const token = useContext(Context).token;

  const [user, setUser] = useState(null);
  const [chats, setChats] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [settingsActive, setSettingsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setData = async () => {
      const res1 = await axios.get(`${process.env.BACKEND_URL}/api/users/getOne`, {
        headers: { 'x-auth-token': token },
      });
      setUser(res1.data.user);

      const res2 = await axios.get(`${process.env.BACKEND_URL}/api/chats`, {
        headers: { 'x-auth-token': token },
      });
      setChats(res2.data.chats);
    };

    setData();

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

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => {
      channel.unbind('send-message');
      pusher.unsubscribe('messages');

      window.removeEventListener('resize', setWindowWidth);
    };
  }, []);

  if (windowWidth <= 768) {
    return (
      <>
        {activeChat ? (
          <ChatSection
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            user={user}
            chats={chats}
          />
        ) : (
          <NavigationSection
            user={user}
            chats={chats}
            setChats={setChats}
            setActiveChat={setActiveChat}
            setSettingsActive={setSettingsActive}
          />
        )}

        {settingsActive && (
          <Settings user={user} setUser={setUser} setSettingsActive={setSettingsActive} />
        )}
      </>
    );
  } else {
    return (
      <>
        <NavigationSection
          user={user}
          chats={chats}
          setChats={setChats}
          setActiveChat={setActiveChat}
          setSettingsActive={setSettingsActive}
        />

        {activeChat && (
          <ChatSection
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            user={user}
            chats={chats}
          />
        )}

        {settingsActive && (
          <Settings user={user} setUser={setUser} setSettingsActive={setSettingsActive} />
        )}
      </>
    );
  }
};

export default ApplicationScreen;
