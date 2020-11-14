import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LandingPage from '../components/LandingPage/LandingPage';
import Application from '../components/Application/Application';
import { signIn } from '../redux/actions/userActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(signIn({ token: localStorage.getItem('token') }));
    }
  }, []);

  if (user) {
    return <Application />;
  } else {
    return <LandingPage />;
  }
};

export default HomePage;
