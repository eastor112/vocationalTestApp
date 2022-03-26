import { types } from '../types/types';

const initialState = {
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        isAuthenticated: true,
      };
    case types.logout:
      return initialState;
    default:
      return state;
  }
};
