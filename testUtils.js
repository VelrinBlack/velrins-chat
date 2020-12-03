import * as rtl from '@testing-library/react';
import useForceUpdate from 'use-force-update';

import Context from './Context';

const AllTheProviders = ({ children }) => {
  const forceUpdate = useForceUpdate();

  return <Context.Provider value={{ forceUpdate }}>{children}</Context.Provider>;
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
