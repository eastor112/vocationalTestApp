import { emailValidationApi, loginValidationApi } from '../../services/authServices';
import { types } from '../types/types';
import { setError, setLoading } from './ui-actions';

export const loginSimple = (result) => ({
  type: types.login,
  payload: {
    ...result,
  },
});

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const result = await loginValidationApi(email, password);

      localStorage.setItem('token', result.token);
      dispatch(loginSimple(result));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const logoutSimple = () => {
  localStorage.removeItem('token');
  return {
    type: types.logout,
    payload: {},
  };
};

export const emailValidationAsync = (hash) => {
  return async (dispatch) => {
    try {
      const result = await emailValidationApi(hash);
      localStorage.setItem('token', result.token);
      dispatch(loginSimple(result));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
