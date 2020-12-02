import { Provider } from 'react-redux';
import * as rtl from '@testing-library/react';

import store from './redux/store';

const AllTheProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
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
