import { createReducer } from '@reduxjs/toolkit';
import { IAuthStore } from './definitions';
import { recoverySession, validateCredentials } from './actions.async';

const initialState: IAuthStore = {
  userData: null,
  tokenAccess: null,
  hasVerifySession: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(validateCredentials.fulfilled, (state, action) => {
    state.userData = action.payload.userData;
    state.tokenAccess = action.payload.tokenAccess;
  });

  builder.addCase(recoverySession.fulfilled, (state, action) => {
    state.hasVerifySession = true;
    state.userData = action.payload.userData;
    state.tokenAccess = action.payload.tokenAccess;
  });
});

export default reducer;
