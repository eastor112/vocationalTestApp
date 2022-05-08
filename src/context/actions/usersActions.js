import { Country } from 'country-state-city';
import { updateUserApi } from '../../services/authServices';
import { fetchAllUsers, searchUsers } from '../../services/usersServices';

export const setAllUsersAction = (limit = 5, page = 1) => {
  return async (dispatch) => {
    const data = await fetchAllUsers(limit, page);

    dispatch({
      type: 'SET_USERS',
      payload: data,
    });
  };
};

export const setActiveUserAction = (user) => {
  return {
    type: 'SET_ACTIVE_USER',
    payload: user,
  };
};

export const setCountriesAction = () => {
  const countries = Country.getAllCountries();
  return {
    type: 'SET_COUNTRIES',
    payload: countries,
  };
};

export const updateActiveUserAction = (data) => {
  return async (dispatch) => {
    const token = await localStorage.getItem('token');

    const updatedUser = await updateUserApi(token, data);

    dispatch({
      type: 'UPDATE_ACTIVE_USER',
      payload: updatedUser,
    });
  };
};

export const setPageUsersAction = (page) => {
  return {
    type: 'SET_PAGE_USERS',
    payload: page,
  };
};

export const searchUsersAction = (filter, limit = 5, page = 1) => {
  return async (dispatch) => {
    const data = await searchUsers(filter, limit, page);

    dispatch({
      type: 'SET_USERS',
      payload: data,
    });
  };
};
