import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setUser } from '../redux/actions/userActions';
import LandingPage from '../components/LandingPage/LandingPage';
import Application from '../components/Application/Application';

const HomePage = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => {
    if (state.user) {
      return state.user.token;
    }
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setUser({ token: localStorage.getItem('token') }));
    }
  }, []);

  if (token) {
    return <Application />;
  } else {
    return <LandingPage />;
  }
};

export default HomePage;
