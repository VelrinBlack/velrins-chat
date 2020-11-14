import { createReducer } from '@reduxjs/toolkit';

const userReducer = createReducer(null, {
  SIGN_IN: (state, action) => {
    return action.payload.token;
  },
  SIGN_OUT: (state, action) => {
    return null;
  },
});

export default userReducer;
