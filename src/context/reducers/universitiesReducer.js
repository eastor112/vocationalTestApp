import { types } from '../types/types';

const initialState = {
  universities: [],
  activeUniversity: {},
  isEditingModal: false,
};

export const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setIsEditingModal:
      return {
        ...state,
        isEditingModal: action.payload,
      };

    case types.setUniversities:
      return {
        ...state,
        universities: action.payload,
      };

    case types.setActiveUniversity:
      return {
        ...state,
        activeUniversity: action.payload,
      };

    case types.updateActiveUniversity:
      return {
        ...state,
        activeUniversity: {
          ...state.activeUniversity,
          ...action.payload,
        },
      };

    case types.deleteLogoUniversity:
      return {
        ...state,
        activeUniversity: {
          ...state.activeUniversity,
          logo: '',
        },
      };

    case types.deleteCampusImageUniversity:
      return {
        ...state,
        activeUniversity: {
          ...state.activeUniversity,
          campus: state.activeUniversity.campus.filter((campusImg) => {
            return campusImg !== action.payload;
          }),
        },
      };

    case types.createUniversityOffer:
      return {
        ...state,
        activeUniversity: {
          ...state.activeUniversity,
          offer: [...state.activeUniversity.offer, action.payload],
        },
      };

    case types.updateUniversitiesOffer:
      return {
        ...state,
        activeUniversity: {
          ...state.activeUniversity,
          offer: state.activeUniversity.offer.map((offer) => {
            if (offer._id === action.payload._id) {
              return action.payload;
            }
            return offer;
          }),
        },
      };

    case types.deleteUniversityOffer:
      return {
        ...state,
        activeUniversity: {
          ...state.activeUniversity,
          offer: state.activeUniversity.offer.filter((offer) => {
            return offer._id !== action.payload;
          }),
        },
      };

    default:
      return state;
  }
};
