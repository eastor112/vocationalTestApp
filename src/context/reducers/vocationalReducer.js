import { types } from '../types/types';

const initialState = {
  testResult: {},
  tests: [],
  activeTest: {},
  questions: [],
};

export const vocationalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setTestResult:
      return {
        ...state,
        testResult: { ...action.payload },
      };

    case types.setTests:
      return {
        ...state,
        tests: [...action.payload],
      };
    case types.setActiveTest:
      return {
        ...state,
        activeTest: { ...action.payload },
      };
    case types.setQuestions:
      return {
        ...state,
        questions: [...action.payload],
      };
    default:
      return state;
  }
};
