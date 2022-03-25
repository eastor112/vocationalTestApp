import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/firebase-config';
import { types } from '../types/types';

export const loginSimple = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const loginAsync = (uid, displayName) => {
  return (dispatch) => {
    dispatch(loginSimple(uid, displayName));
  };
};

export const logout = () => ({
  type: types.logout,
  payload: {},
});

export const loginGoogle = () => {
  return async (dispatch) => {
    const { user } = await signInWithPopup(auth, provider);
    dispatch(loginSimple(user.uid, user.displayName));
  };
};
