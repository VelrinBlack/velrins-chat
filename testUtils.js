import * as rtl from '@testing-library/react';

import Context from './Context';

const AllTheProviders = ({ children }) => {
  const token = null;
  const logIn = null;
  const logOut = null;

  return <Context.Provider value={{ token, logIn, logOut }}>{children}</Context.Provider>;
};

const customRender = (ui, options) =>
  rtl.render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

module.exports = {
  ...rtl,
  render: customRender,
};
