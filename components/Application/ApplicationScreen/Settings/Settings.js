import { useState, useContext } from 'react';
import axios from 'axios';

import SettingsStyles from './SettingsStyles';
import Context from '../../../../Context';

const Settings = ({ user, setUser, setSettingsActive }) => {
  const token = useContext(Context).token;

  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [image, setImage] = useState(user.image);

  const [serverResponse, setServerResponse] = useState(null);

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
      case 'surname':
        return setSurname(target.value);
    }
  };

  const handleImageInputChange = ({ target }) => {
    if (!target.files[0]) return;

    if (target.files[0].size > 100000) {
      return alert('This image is too large! \nPlease select image up to 100 kB');
    }

    const reader = new FileReader();
    const file = target.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
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
          image,
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
            image,
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
            <div className='imageField'>
              <input
                type='file'
                accept='image/png, image/jpeg, image/webp'
                onChange={handleImageInputChange}
              />
              <img
                src={image || '/images/profile.png'}
                alt='profile image'
                className='profileImage'
              />
              <img src='/images/edit.svg' alt='edit icon' className='editIcon' />
            </div>

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
