import { types } from '../types/types';

const initialState = {
  questions: [],
  activeQuestion: {},
  totalQuestions: 0,

};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setQuestionsAdmin:
      return {
        ...state,
        questions: action.payload,
      };

    case types.setActiveQuestion:
      return {
        ...state,
        activeQuestion: action.payload,
      };
    default:
      return state;
  }
};
