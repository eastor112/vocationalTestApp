import { types } from '../types/types';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isAuthenticated: true,
        ...action.payload,
      };
    case types.logout:
      return initialState;
    default:
      return state;
  }
};
