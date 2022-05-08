import { types } from '../types/types';

const initialState = {
  tests: [],
  activeTest: {},
};

export const adminTestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setTestsAdmin:
      return {
        ...state,
        tests: [...action.payload],
      };

    case types.setActiveTestAdmin:
      return {
        ...state,
        activeTest: { ...action.payload },
      };

    case types.clearActiveTestAdmin:
      return {
        ...state,
        activeTest: {},
      };

    case types.updateActiveTestAdmin:
      return {
        ...state,
        activeTest: { ...action.payload },
      };

    default:
      return state;
  }
};
