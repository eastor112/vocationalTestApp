import {
  createCareer,
  destroyCareer,
  getAllCareers,
  searchCareers,
  updateFieldCareer,
  updateMainCareer,
  updateSkillsCareer,
} from '../../services/careersServices';
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

export const setActiveCareerAction = (careerId) => {
  return async (dispatch, getState) => {
    const { careers } = getState().careers;

    const career = careers.find((item) => item.id === careerId);

    dispatch({
      type: types.setActiveCareer,
      payload: career,
    });
  };
};

export const clearActiveCareerAction = () => {
  return async (dispatch) => {
    dispatch({
      type: types.setActiveCareer,
      payload: {},
    });
  };
};

export const updateMainCareerAction = (id, data) => {
  return async (dispatch) => {
    const updatedCareer = await updateMainCareer(id, data);

    dispatch({
      type: types.setActiveCareer,
      payload: updatedCareer,
    });
  };
};

export const updateFieldCareerAction = (id, data) => {
  return async (dispatch) => {
    const updatedCareer = await updateFieldCareer(id, data);

    dispatch({
      type: types.setActiveCareer,
      payload: updatedCareer,
    });
  };
};

export const updateSkillsCareerAction = (id, data) => {
  return async (dispatch) => {
    const updatedCareer = await updateSkillsCareer(id, data);

    dispatch({
      type: types.setActiveCareer,
      payload: updatedCareer,
    });
  };
};

export const createCareerAction = (careerName) => {
  return async (dispatch) => {
    const career = await createCareer(careerName);

    dispatch({
      type: types.setActiveCareer,
      payload: career,
    });
  };
};

export const destroyCareerAction = (id, page, cardsByPage) => {
  return async (dispatch) => {
    await destroyCareer(id);

    dispatch({
      type: types.destroyCareer,
      payload: id,
    });

    dispatch(setCareersAction(cardsByPage, page));
  };
};

export const searchCareersAction = (query, limit = 10, page = 1) => {
  return async (dispatch) => {
    const careers = await searchCareers(query, limit, page);

    dispatch({
      type: types.setCareers,
      payload: careers,
    });
  };
};
