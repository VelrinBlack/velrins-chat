import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LandingPage from '../components/LandingPage/LandingPage';
import Application from '../components/Application/Application';
import { signIn } from '../redux/actions/userActions';

const HomePage = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => {
    if (state.user) {
      return state.user.token;
    }
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(signIn({ token: localStorage.getItem('token') }));
    }
  }, []);

  if (token) {
    return <Application />;
  } else {
    return <LandingPage />;
  }
};

export default HomePage;
