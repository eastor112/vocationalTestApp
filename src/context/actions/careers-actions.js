import { getAllCareers } from '../../services/careersServices';
import { types } from '../types/types';

export const setCareersAction = (limit = 10, page = 1) => {
  return async (dispatch) => {
    const careers = await getAllCareers(limit, page);

    dispatch({
      type: types.setCareers,
      payload: careers,
    });
  };
};

export const setPageCareersAction = (page) => {
  return async (dispatch) => {
    dispatch({
      type: types.setPageCareers,
      payload: page,
    });
  };
};
