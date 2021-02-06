import { useEffect, useState } from 'react';
import Head from 'next/head';

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
    <>
      <Head>
        <title>Velrin's Chat</title>
        <meta name='description' content='Take your chats to the next level!' />
        <link rel='shortcut icon' type='image/jpg' href='/images/logo.png' />

        <meta property='og:title' content="Velrin's Chat" />
        <meta property='og:image' content='/images/logo.png' />
        <meta property='og:description' content='Take your chats to the next level!' />
      </Head>

      <Context.Provider value={{ token, logIn, logOut }}>
        {token ? <Application /> : <LandingPage />}
      </Context.Provider>
    </>
  );
};

export default HomePage;
