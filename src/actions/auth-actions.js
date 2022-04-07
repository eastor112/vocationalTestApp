import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/firebase-config';
import { loginValidationApi } from '../services/authServices';
import { types } from '../types/types';
import { setError, setLoaded } from './ui-actions';

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
      dispatch(loginSimple(user));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoaded());
    }
  };
};

export const logoutSimple = () => ({
  type: types.logout,
  payload: {},
});

export const loginGoogle = () => {
  return async (dispatch) => {
    const { user } = await signInWithPopup(auth, provider);
    dispatch(loginSimple(user.uid, user.displayName));
  };
};
