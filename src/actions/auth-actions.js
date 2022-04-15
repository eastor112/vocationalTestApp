import { emailValidationApi, loginValidationApi } from '../services/authServices';
import { types } from '../types/types';
import { setError, setLoading } from './ui-actions';

export const loginSimple = (user) => ({
  type: types.login,
  payload: {
    ...user,
  },
});

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const user = await loginValidationApi(email, password);
      localStorage.setItem('token', user.token);
      dispatch(loginSimple(user));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const logoutSimple = () => ({
  type: types.logout,
  payload: {},
});

export const emailValidationAsync = (hash) => {
  return async (dispatch) => {
    try {
      const user = await emailValidationApi(hash);
      localStorage.setItem('token', user.token);
      dispatch(loginSimple(user));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};
