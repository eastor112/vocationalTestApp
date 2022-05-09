import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { vocationalReducer } from './vocationalReducer';
import { solvingTestReducer } from './solvingTestReducer';
import { billingsReducer } from './billingsReducer';
import { universitiesReducer } from './universitiesReducer';
import { careersReducer } from './careersReducer';
import { adminTestsReducer } from './adminTestsReducer';
import { types } from '../types/types';

const appReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  users: usersReducer,
  vocational: vocationalReducer,
  solvingTest: solvingTestReducer,
  billings: billingsReducer,
  universities: universitiesReducer,
  careers: careersReducer,
  testsAdmin: adminTestsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === types.resetStore) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
