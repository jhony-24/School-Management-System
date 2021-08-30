import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/reducer';

const store = configureStore({
  middleware: [thunk],
  reducer: {
    auth: authReducer,
  },
});

export default store;
