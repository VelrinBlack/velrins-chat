import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { resetUser } from '../../redux/actions/userActions';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import ActivationScreen from './ActivationScreen/ActivationScreen';

const Application = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => {
    if (state.user) {
      return state.user.token;
    }
  });

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
        dispatch(resetUser());
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
