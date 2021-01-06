import { useState } from 'react';

import SettingsStyles from './SettingsStyles';

const Settings = ({ user, setUser, setSettingsActive }) => {
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);

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
    setSettingsActive(false);
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

            <button type='submit'>
              <span>Save</span>
            </button>
          </form>
        </div>
      </div>
    </SettingsStyles>
  );
};

export default Settings;
