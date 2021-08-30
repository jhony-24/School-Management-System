import { createAsyncThunk } from '@reduxjs/toolkit';

import API from '../../core/services';

export const validateCredentials = createAsyncThunk(
  'auth/success-auth',
  async (data, thunk) => {
    const result = await API.validateSession();
    return {
      tokenAccess: null,
      userData: null,
    };
  }
);

export const recoverySession = createAsyncThunk(
  'auth/recovery-session',
  async (data, thunk) => {
    const result = await API.restoreSession();
    return {
      tokenAccess: null,
      userData: null,
    };
  }
);
