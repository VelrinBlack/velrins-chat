import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import LandingPage from '../components/LandingPage/LandingPage';
import Application from '../components/Application/Application';
import Mobile from '../components/Mobile/Mobile';
import Context from '../Context';

const HomePage = () => {
  const [token, setToken] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
    }

    setMobile(isMobile);
  }, []);

  const logIn = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <>
      {mobile ? (
        <Mobile />
      ) : (
        <Context.Provider value={{ token, logIn, logOut }}>
          {token ? <Application /> : <LandingPage />}
        </Context.Provider>
      )}
    </>
  );
};

export default HomePage;
