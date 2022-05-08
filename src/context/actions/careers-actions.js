import Swal from 'sweetalert2';
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
    Swal.fire({
      title: 'Updating...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const updatedCareer = await updateMainCareer(id, data);

      dispatch({
        type: types.setActiveCareer,
        payload: updatedCareer,
      });

      Swal.close();
    } catch (err) {
      Swal.close();
      Swal.fire({
        title: 'Error',
        html: err.message,
        icon: 'error',
      });
    }
  };
};

export const updateFieldCareerAction = (id, data) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Updating...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const updatedCareer = await updateFieldCareer(id, data);

      dispatch({
        type: types.setActiveCareer,
        payload: updatedCareer,
      });
      Swal.close();
    } catch (err) {
      Swal.close();
      Swal.fire({
        title: 'Error',
        html: err.message,
        icon: 'error',
      });
    }
  };
};

export const updateSkillsCareerAction = (id, data) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Updating...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const updatedCareer = await updateSkillsCareer(id, data);

      dispatch({
        type: types.setActiveCareer,
        payload: updatedCareer,
      });

      Swal.close();
    } catch (err) {
      Swal.close();
      Swal.fire({
        title: 'Error',
        html: err.message,
        icon: 'error',
      });
    }
  };
};

export const createCareerAction = (careerName) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: 'Creating a new career...',
        html: 'Wait a moment...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const career = await createCareer(careerName);

      dispatch({
        type: types.setActiveCareer,
        payload: career,
      });
      Swal.close();
    } catch (err) {
      Swal.close();
      Swal.fire({
        title: 'Error',
        html: err.message,
        icon: 'error',
      });
    }
  };
};

export const destroyCareerAction = (id, page, cardsByPage) => {
  return async (dispatch) => {
    const result = await Swal.fire({

      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: 'Updating...',
        html: 'Wait a moment...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        await destroyCareer(id);
        dispatch({
          type: types.destroyCareer,
          payload: id,
        });

        dispatch(setCareersAction(cardsByPage, page));

        Swal.fire({
          title: 'Success!',
          icon: 'success',
          html: 'Offer deleted successfully!',
          confirmButtonText: 'Ok',
        }).then(() => {
          Swal.close();
        });
      } catch (err) {
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          html: err.message,
          confirmButtonText: 'Ok',
        }).then(() => {
          Swal.close();
        });
      }
    }
  };
};

export const searchCareersAction = (query, limit = 10, page = 1) => {
  return async (dispatch) => {
    try {
      const careers = await searchCareers(query, limit, page);
      Swal.fire({
        title: 'Searching related careers...',
        html: 'Wait a moment...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      dispatch({
        type: types.setCareers,
        payload: careers,
      });
      Swal.close();
    } catch (err) {
      Swal.close();
      Swal.fire({
        title: 'Error',
        html: err.message,
        icon: 'error',
      });
    }
  };
};
