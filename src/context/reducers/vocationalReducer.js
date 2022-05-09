import { types } from '../types/types';

const initialState = {
  testsResults: [],
  activeTestResult: {},
  tests: [],
  activeTest: {},
  questions: [],
};

export const vocationalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setActiveTestResult:
      return {
        ...state,
        activeTestResult: { ...action.payload },
      };

    case types.clearActiveTestResult:
      return {
        ...state,
        activeTestResult: {},
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

    case types.clearQuestions:
      return {
        ...state,
        questions: [],
      };

    case types.setTestsResults:
      return {
        ...state,
        testsResults: [...action.payload],
      };

    case types.deleteTestResult:
      return {
        ...state,
        testsResults: state.testsResults.filter(
          (testResult) => testResult.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
