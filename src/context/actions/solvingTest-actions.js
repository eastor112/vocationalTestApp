import { types } from '../types/types';

export const addQuestionResponseAction = (question, userResponse) => {
  return async (dispatch) => {
    dispatch({
      type: types.addQuestionResponse,
      payload: { question, userResponse },
    });
  };
};
