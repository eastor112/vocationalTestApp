import { types } from '../types/types';

const initialState = {
  careers: [],
  activeCareer: {},
  totalCareers: 0,
  totalPages: 0,
  page: 1,
};

export const careersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCareers:
      return {
        ...state,
        careers: action.payload.results,
        totalCareers: action.payload.totalDocs,
        totalPages: action.payload.totalPages,
        page: action.payload.currentPage,
      };

    case types.setActiveCareer:
      return {
        ...state,
        activeCareer: action.payload,
      };

    case types.setPageCareers:
      return {
        ...state,
        page: action.payload,
      };

    case types.destroyCareer:
      return {
        ...state,
        careers: state.careers.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
