import { useEffect, useContext, useState } from 'react';
import axios from 'axios';

import ApplicationScreenStyles from './ApplicationScreenStyles';
import NavigationCard from './NavigationCard/NavigationCard';
import Context from '../../../Context';

const ApplicationScreen = () => {
  const token = useContext(Context).token;

  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(async () => {
    const res = await axios.get(`${process.env.BACKEND_URL}/api/user/getOne?token=${token}`);
    setUser(res.data);

    const res2 = await axios.get(`${process.env.BACKEND_URL}/api/chat/getAll?token=${token}`);
    setChats(res2.data.chats);
  }, []);

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
            const cardUser = chat.users.filter(({ _id }) => _id !== user.id)[0];

            return <NavigationCard user={cardUser} messages={chat.messages} key={chat._id} />;
          })}
        </ul>
      </nav>
      <main></main>
    </ApplicationScreenStyles>
  );
};

export default ApplicationScreen;
