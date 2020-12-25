import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import LoadingScreen from './LoadingScreen/LoadingScreen';
import ActivationScreen from './ActivationScreen/ActivationScreen';
import ApplicationScreen from './ApplicationScreen/ApplicationScreen';
import Context from '../../Context';

const Application = () => {
  const logOut = useContext(Context).logOut;
  const token = useContext(Context).token;

  const [email, setEmail] = useState('');
  const [isActivated, setIsActivated] = useState(null);

  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/users/authorizate`, {
        token,
      })
      .then(() => {
        setIsActivated(true);
      })
      .catch((err) => {
        if (err.response.data.info === 'User not activated') {
          setIsActivated(false);
          setEmail(err.response.data.email);

          return;
        }

        logOut();
      });
  }, []);

  if (isActivated === null) {
    return <LoadingScreen />;
  } else if (!isActivated) {
    return <ActivationScreen email={email} setIsActivated={setIsActivated} />;
  } else {
    return <ApplicationScreen />;
  }
};

export default Application;
