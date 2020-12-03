import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import LoadingScreen from './LoadingScreen/LoadingScreen';
import ActivationScreen from './ActivationScreen/ActivationScreen';
import Context from '../../Context';

const Application = () => {
  const forceUpdate = useContext(Context).forceUpdate;

  const token = localStorage.getItem('token');

  const [serverResponse, setServerResponse] = useState('loading');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/user/authorizate`, {
        token,
      })
      .then((res) => {
        setServerResponse(res.data.message);
      })
      .catch((err) => {
        if (err.response.data.message === 'User not activated') {
          setServerResponse('User not activated');
          setEmail(err.response.data.email);

          return;
        }

        localStorage.removeItem('token');
        forceUpdate();
      });
  }, []);

  if (serverResponse === 'loading') {
    return <LoadingScreen />;
  } else if (serverResponse === 'User not activated') {
    return <ActivationScreen email={email} />;
  } else {
    return <h1>{serverResponse}</h1>;
  }
};

export default Application;
