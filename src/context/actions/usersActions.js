import { Country } from 'country-state-city';
import Swal from 'sweetalert2';
import { signUpInstitutionApi, signUpStudentApi, updateUserApi } from '../../services/authServices';
import { destroyUser, fetchAllUsers, searchUsers } from '../../services/usersServices';

export const setAllUsersAction = (limit = 5, page = 1) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Getting users...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const data = await fetchAllUsers(limit, page);

      dispatch({
        type: 'SET_USERS',
        payload: data,
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
      const token = localStorage.getItem('token');

      const updatedUser = await updateUserApi(token, data);

      dispatch({
        type: 'UPDATE_ACTIVE_USER',
        payload: updatedUser,
      });

      dispatch({
        type: 'SET_EDITING',
        payload: false,
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

export const setPageUsersAction = (page) => {
  return {
    type: 'SET_PAGE_USERS',
    payload: page,
  };
};

export const searchUsersAction = (filter, limit = 5, page = 1) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Searching...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const data = await searchUsers(filter, limit, page);

      dispatch({
        type: 'SET_USERS',
        payload: data,
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

export const addStudentUserAction = (email, password, limit, page) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Creating a new student...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await signUpStudentApi(email, password);

      dispatch({
        type: 'SET_EDITING',
        payload: false,
      });
      Swal.close();

      dispatch(setAllUsersAction(limit, page));
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

export const addInstitutionUserAction = (
  email,
  password,
  name,
  country,
  phone,
  url,
  limit,
  page,
) => {
  return async (dispatch) => {
    Swal.fire({
      title: 'Creating a new institution...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await signUpInstitutionApi(email, password, name, country, phone, url);
      Swal.close();
      dispatch({
        type: 'SET_EDITING',
        payload: false,
      });

      dispatch(setAllUsersAction(limit, page));
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

export const destroyUserAction = (uid, limit, page) => {
  return async (dispatch) => {
    const prev = await Swal.fire({

      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (prev.isConfirmed) {
      const confirm = await Swal.fire({

        title: 'All related data of this user will be deleted',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (confirm.isConfirmed) {
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
          await destroyUser(uid);

          dispatch(setAllUsersAction(limit, page));

          Swal.fire({
            title: 'Success!',
            icon: 'success',
            html: 'User deleted successfully!',
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
    }
  };
};

export const setIsEditingUsersAction = (isEditing) => {
  return {
    type: 'SET_EDITING',
    payload: isEditing,
  };
};
