import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import LoadingScreen from './LoadingScreen/LoadingScreen';
import ActivationScreen from './ActivationScreen/ActivationScreen';
import { signOut } from '../../redux/actions/userActions';

const Application = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => {
    if (state.user) {
      return state.user.token;
    }
  });

  const [serverResponse, setServerResponse] = useState('loading');

  useEffect(() => {
    axios
      .post(`${process.env.BACKEND_URL}/api/user/authorizate`, {
        token,
      })
      .then((res) => {
        console.log(res.data);
        setServerResponse(res.data);
      })
      .catch(() => {
        localStorage.removeItem('token');
        dispatch(signOut());
      });
  }, []);

  return (
    <>
      {serverResponse === 'loading' ? (
        <LoadingScreen />
      ) : serverResponse.message === 'User not activated' ? (
        <ActivationScreen email={serverResponse.email} />
      ) : (
        <h1>Something went wrong</h1>
      )}
    </>
  );
};

export default Application;
