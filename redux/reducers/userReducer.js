import { createReducer } from '@reduxjs/toolkit';

const userReducer = createReducer(null, {
  SIGN_IN: (state, action) => {
    state = action.payload.token;
  },
  SIGN_OUT: (state, action) => {
    state = null;
  },
});

export default userReducer;
