import { createReducer } from '@reduxjs/toolkit';

const userReducer = createReducer(null, {
  SET_USER: (state, action) => {
    return action.payload;
  },
  RESET_USER: (state, action) => {
    return null;
  },
});

export default userReducer;
