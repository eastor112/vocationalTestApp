import Swal from 'sweetalert2';
import { emailValidationApi, loginValidationApi, updateUserApi } from '../../services/authServices';
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

export const updateUserDataAsync = (token, user) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: 'Updating...',
        html: 'Wait a moment...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const updateduser = await updateUserApi(token, user);

      dispatch({
        type: types.updateUserData,
        payload: {
          ...updateduser,
        },
      });

      Swal.close();
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: 'Error!',
        text: 'Please try again later',
        icon: 'error',
        confirmButtonText: 'ok',
      });
    }
  };
};
