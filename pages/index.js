import { useEffect, useState } from 'react';

import LandingPage from '../components/LandingPage/LandingPage';
import Application from '../components/Application/Application';
import Context from '../Context';

const HomePage = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
    }
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
    <Context.Provider value={{ token, logIn, logOut }}>
      {token ? <Application /> : <LandingPage />}
    </Context.Provider>
  );
};

export default HomePage;
