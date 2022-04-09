import { types } from '../types/types';

const initialState = {
  error: null,
  isLoading: false,
  isLoggedIn: false,
  user: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setError:
      return {
        ...state,
        error: action.payload,
      };
    case types.clearError:
      return {
        ...state,
        error: null,
      };
    case types.loading:
      return {
        ...state,
        isLoading: true,
      };
    case types.loaded:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
