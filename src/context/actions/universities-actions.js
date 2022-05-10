import Swal from 'sweetalert2';
import { createOffer, destroyOffer, updateOffer } from '../../services/offersServices';
import { deleteUniversityImages, getAllUniversities, getUniversityById, updateMediaUniversity, updatePrincipalUniversity, updateUniversityProcess, updateUniversitySocialMedia } from '../../services/universitiesServices';
import { types } from '../types/types';

export const setIsEditingModal = (isEditing) => ({
  type: types.setIsEditingModal,
  payload: isEditing,
});

export const setUniversitiesAction = () => {
  return async (dispatch) => {
    const universities = await getAllUniversities();

    dispatch({
      type: types.setUniversities,
      payload: universities.universities,
    });
  };
};

export const setActiveUniversityAction = (id) => {
  return async (dispatch) => {
    const university = await getUniversityById(id);

    dispatch({
      type: types.setActiveUniversity,
      payload: university,
    });
  };
};

export const updateActiveUniversityPrincipalAction = (id, data) => {
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
      const updatedUniversity = await updatePrincipalUniversity(id, data);
      dispatch({
        type: types.updateActiveUniversity,
        payload: updatedUniversity,
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

export const updateActiveUniversityMediaAction = (id, data) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Uploading image...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const updatedUniversity = await updateMediaUniversity(id, data);

      dispatch({
        type: types.updateActiveUniversity,
        payload: updatedUniversity,
      });

      document.getElementById('campus').value = null;
      document.getElementById('logo').value = null;
      Swal.close();
    } catch (err) {
      document.getElementById('campus').value = null;
      document.getElementById('logo').value = null;

      Swal.close();

      Swal.fire({
        html: 'Something went wrong',
        title: 'Error',
        icon: 'error',
      });
    }
  };
};

export const deleteImageFromActiveUniversityAction = (id, target, image) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Deleting image...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await deleteUniversityImages(id, target, image);

      if (target === 'logo') {
        dispatch({
          type: types.deleteLogoUniversity,
          payload: null,
        });
      }

      if (target === 'campus') {
        dispatch({
          type: types.deleteCampusImageUniversity,
          payload: image,
        });
      }

      document.getElementById('campus').value = null;
      document.getElementById('logo').value = null;
      Swal.close();
    } catch (err) {
      document.getElementById('campus').value = null;
      document.getElementById('logo').value = null;
      Swal.fire({
        html: 'Something went wrong',
        icon: 'error',
        title: 'Error',
      });
    }
  };
};

export const updateUniversityProcessAction = (id, data) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Updating admision process...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const updatedUniversity = await updateUniversityProcess(id, data);

      dispatch({
        type: types.updateActiveUniversity,
        payload: updatedUniversity,
      });

      Swal.close();
    } catch (err) {
      Swal.close();

      Swal.fire({
        html: 'Something went wrong',
        icon: 'error',
        title: 'Error',
      });
    }
  };
};

export const universitySocialMediaAction = (id, data) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Updating social media...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const updatedUniversity = await updateUniversitySocialMedia(id, data);

      dispatch({
        type: types.updateActiveUniversity,
        payload: updatedUniversity,
      });

      Swal.close();
    } catch (error) {
      Swal.close();

      Swal.fire({
        html: 'Something went wrong',
        icon: 'error',
        title: 'Error',
      });
    }
  };
};

export const createUniversityOfferAction = (id, data) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Creating an offer...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const newOffer = await createOffer(id, data);

      dispatch({
        type: types.createUniversityOffer,
        payload: newOffer,
      });

      dispatch(setIsEditingModal(false));
      Swal.close();
    } catch (err) {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        html: err.message,
        confirmButtonText: 'Ok',
      }).then(() => {
        dispatch(setIsEditingModal(false));
        Swal.close();
      });
    }
  };
};

export const updateUniversityOfferAction = (id, data) => {
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
      const updatedOffer = await updateOffer(id, data);

      dispatch({
        type: types.updateUniversitiesOffer,
        payload: updatedOffer,
      });

      dispatch(setIsEditingModal(false));
      Swal.close();
    } catch (error) {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        html: error.message,
        confirmButtonText: 'Ok',
      }).then(() => {
        dispatch(setIsEditingModal(false));
        Swal.close();
      });
    }
  };
};

export const deleteUniversityOfferAction = (id) => {
  return async (dispatch) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true,
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
        await destroyOffer(id);

        dispatch({
          type: types.deleteUniversityOffer,
          payload: id,
        });

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
