import { types } from '../types/types';

export const loginSimple = (user) => ({
  type: types.login,
  payload: {
    ...user,
  },
});

export const loginAsync = (user) => {
  return (dispatch) => {
    dispatch(loginSimple(user));
  };
};

export const logoutSimple = () => ({
  type: types.logout,
  payload: {},
});
