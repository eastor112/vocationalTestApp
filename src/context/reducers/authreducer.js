import { types } from '../types/types';

const initialState = {
  isAuthenticated: false,
  address: {},
  fatherName: null,
  motherName: null,
  names: null,
  phone: null,
  profile: null,
  email: null,
  token: null,
  uid: null,
  username: null,
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
