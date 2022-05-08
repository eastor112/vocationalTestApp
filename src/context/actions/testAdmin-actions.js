import Swal from 'sweetalert2';
import { fetchAllTestsService, updateMainTest } from '../../services/vocationalServices';
import { types } from '../types/types';

export const getAllTestsAction = () => {
  return async (dispatch) => {
    const tests = await fetchAllTestsService();
    dispatch({
      type: types.setTestsAdmin,
      payload: tests,
    });
  };
};

export const setActiveTestAction = (test) => {
  return {
    type: types.setActiveTestAdmin,
    payload: test,
  };
};

export const updateTestAction = (id, data) => {
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
      const updatedTest = await updateMainTest(id, data);
      dispatch({
        type: types.setActiveTestAdmin,
        payload: updatedTest,
      });
      Swal.close();
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        html: error.message,
        confirmButtonText: 'Ok',
      }).then(() => {
        Swal.close();
      });
    }
  };
};
