import useForceUpdate from 'use-force-update';

import LandingPage from '../components/LandingPage/LandingPage';
import Application from '../components/Application/Application';
import Context from '../Context';

const HomePage = () => {
  const forceUpdate = useForceUpdate();

  let token;
  try {
    token = localStorage.getItem('token');
  } catch (err) {}

  return (
    <Context.Provider value={{ forceUpdate }}>
      {token ? <Application /> : <LandingPage />}
    </Context.Provider>
  );
};

export default HomePage;
