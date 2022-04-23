import { types } from '../types/types';

const initialState = {
  unsavedQuestionsResponses: [],
  savedQuestionsResponses: [],
};

export const solvingTestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addQuestionResponse: {
      const existingQuestion = state.unsavedQuestionsResponses.find((question) => {
        return question.question === action.payload.question;
      });

      if (existingQuestion) {
        const modifiedQuestionsResponses = state.unsavedQuestionsResponses.map((question) => {
          if (question.question === action.payload.question) {
            question.userResponse = action.payload.userResponse;
          }
          return question;
        });

        return {
          ...state,
          unsavedQuestionsResponses: modifiedQuestionsResponses,
        };
      }

      return {
        ...state,
        unsavedQuestionsResponses: [...state.unsavedQuestionsResponses, action.payload],
      };
    }
    case types.setSavedQuestionsResponses:
      return {
        ...state,
        savedQuestionsResponses: [...action.payload],
      };
    default:
      return state;
  }
};
