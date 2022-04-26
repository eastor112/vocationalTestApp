import { types } from '../types/types';

export const addQuestionResponseAction = (question, userResponse) => {
  return async (dispatch) => {
    dispatch({
      type: types.addQuestionResponse,
      payload: { question, userResponse },
    });
  };
};

export const clearUnsavedQuestionsResponsesAction = () => {
  return {
    type: types.clearUnsavedQuestionsResponses,
    payload: null,
  };
};

export const setSavedQuestionsResponsesAction = (savedQuestionsResponses) => {
  return async (dispatch) => {
    dispatch({
      type: types.setSavedQuestionsResponses,
      payload: savedQuestionsResponses,
    });
  };
};

export const clearSavedQuestionsResponsesAction = () => {
  return async (dispatch) => {
    dispatch({
      type: types.clearSavedQuestionsResponses,
      payload: null,
    });
  };
};

export const resetSolvingTest = () => {
  return {
    type: types.resetSolvingTest,
    payload: null,
  };
};
