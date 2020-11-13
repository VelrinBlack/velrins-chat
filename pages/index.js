import { useEffect, useState } from 'react';

import LandingPage from '../components/LandingPage/LandingPage';
import Application from '../components/Application/Application';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  }, []);

  return <>{isLoggedIn ? <Application /> : <LandingPage />}</>;
};

export default HomePage;
