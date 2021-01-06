import { useState, useContext } from 'react';
import axios from 'axios';

import SettingsStyles from './SettingsStyles';
import Context from '../../../../Context';

const Settings = ({ user, setUser, setSettingsActive }) => {
  const token = useContext(Context).token;

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);

  const [serverResponse, setServerResponse] = useState(null);

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
      case 'surname':
        return setSurname(target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerResponse('loading');

    axios
      .put(
        `${process.env.BACKEND_URL}/api/users/updateOne`,
        {
          id: user.id,
          name,
          surname,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        },
      )
      .then(() => {
        setUser((user) => {
          return {
            ...user,
            name,
            surname,
          };
        });
        setSettingsActive(false);
      })
      .catch(() => {
        setSettingsActive(false);
      });
  };

  return (
    <SettingsStyles>
      <div className='settingsShadow'>
        <div className='settings'>
          <h2>Settings</h2>

          <form onSubmit={handleSubmit}>
            <img src='/images/profile.png' alt='profile' />

            <div className='nameField'>
              <label htmlFor='name'>Name: </label>
              <input type='text' name='name' value={name} onChange={handleInputChange} />
            </div>

            <div className='surnameField'>
              <label htmlFor='surname'>Surname: </label>
              <input type='text' name='surname' value={surname} onChange={handleInputChange} />
            </div>

            {serverResponse === 'loading' && (
              <div className='loading'>
                <div className='dot1'></div>
                <div className='dot2'></div>
                <div className='dot3'></div>
              </div>
            )}

            {serverResponse === null && (
              <button type='submit'>
                <span>Save</span>
              </button>
            )}
          </form>
        </div>
      </div>
    </SettingsStyles>
  );
};

export default Settings;
