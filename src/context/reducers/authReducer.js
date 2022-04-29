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

    case types.updateUserData:
      return {
        ...state,

        user: {
          ...state.user,
          ...action.payload,
        },
      };

    case types.addPurchasedTest:
      return {
        ...state,
        user: {
          ...state.user,
          purchasedTests: [...state.user.purchasedTests, action.payload],
        },
      };

    default:
      return state;
  }
};
