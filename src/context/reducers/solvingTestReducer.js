import { types } from '../types/types';

const initialState = {
  questionsResponses: [],
};

export const solvingTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setQuestionsResponses:
    case types.addQuestionResponse: {
      const existingQuestion = state.questionsResponses.find((question) => {
        return question.question === action.payload.question;
      });

      if (existingQuestion) {
        const modifiedQuestionsResponses = state.questionsResponses.map((question) => {
          if (question.question === action.payload.question) {
            question.userResponse = action.payload.userResponse;
          }
          return question;
        });

        return {
          ...state,
          questionsResponses: modifiedQuestionsResponses,
        };
      }

      return {
        ...state,
        questionsResponses: [...state.questionsResponses, action.payload],
      };
    }
    default:
      return state;
  }
};
