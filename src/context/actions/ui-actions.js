import { types } from '../types/types';

export const setError = (msg) => {
  return {
    type: types.setError,
    payload: msg,
  };
};

export const clearError = () => {
  return {
    type: types.clearError,
    payload: null,
  };
};

export const setLoading = (val) => {
  return {
    type: types.loading,
    payload: val,
  };
};
