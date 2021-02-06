import { useContext } from 'react';

import NavigationSectionStyles from './NavigationSectionStyles';
import NavigationCard from './NavigationCard/NavigationCard';
import CreateChatForm from './CreateChatForm/CreateChatForm';
import Context from '../../../../Context';

const NavigationSection = ({ user, chats, setChats, setActiveChat, setSettingsActive }) => {
  const logOut = useContext(Context).logOut;

  return (
    <NavigationSectionStyles>
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
    </NavigationSectionStyles>
  );
};

export default NavigationSection;
