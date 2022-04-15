import { types } from '../types/types';

const initialState = {
  error: null,
  isLoading: false,
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
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
