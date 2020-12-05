import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import LoadingScreen from './LoadingScreen/LoadingScreen';
import ActivationScreen from './ActivationScreen/ActivationScreen';
import Context from '../../Context';

const Application = () => {
  const logOut = useContext(Context).logOut;
  const token = useContext(Context).token;

  const [email, setEmail] = useState('');
  const [isActivated, setIsActivated] = useState(null);

  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/user/authorizate`, {
        token,
      })
      .then(() => {
        setIsActivated(true);
      })
      .catch((err) => {
        if (err.response.data.message === 'User not activated') {
          setIsActivated(false);
          setEmail(err.response.data.email);

          return;
        }

        logOut();
      });
  }, []);

  if (isActivated === null) {
    return <LoadingScreen />;
  } else if (isActivated === false) {
    return <ActivationScreen email={email} setIsActivated={setIsActivated} />;
  } else {
    return <h1>user is activated</h1>;
  }
};

export default Application;
