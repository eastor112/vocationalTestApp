import { types } from '../types/types';

const initialState = {
  activeBilling: {},
  isPurchased: false,
};

export const billingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setBilling:
      return {
        ...state,
        activeBilling: action.payload,
      };

    case types.setIsPurchased:
      return {
        ...state,
        isPurchased: action.payload,
      };

    default:
      return state;
  }
};
