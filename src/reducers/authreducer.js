import { types } from '../types/types';

const initialState = {
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
      };
    case types.logout:
      return {
        ...state,
        uid: null,
        displayName: null,
      };
    default:
      return state;
  }
};
