import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { usersReducer } from './usersReducer';
import { vocationalReducer } from './vocationalReducer';
import { solvingTestReducer } from './solvingTestReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  users: usersReducer,
  vocational: vocationalReducer,
  solvingTest: solvingTestReducer,
});

export default rootReducer;
