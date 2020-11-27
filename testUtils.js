const rtl = require('@testing-library/react');
import { Provider } from 'react-redux';

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
