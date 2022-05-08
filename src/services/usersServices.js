const BASE_URL = process.env.REACT_APP_ENV === 'develop'
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PROD;

export const fetchAllUsers = async (limit = 5, page = 1) => {
  const URL = `${BASE_URL}/api/users?page=${page}&limit=${limit}`;
  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(URL, requestOptions);

  if (response.status !== 200) {
    return Promise.reject(new Error('Error fetching users'));
  }

  const data = await response.json();
  return data;
};

export const searchUsers = async (filter, limit = 5, page = 1) => {
  const URL = `${BASE_URL}/api/search/users/${filter}?page=${page}&limit=${limit}`;
  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(URL, requestOptions);

  if (response.status !== 200) {
    return Promise.reject(new Error('Error fetching users'));
  }

  const data = await response.json();
  return data;
};

export const destroyUser = async (uid) => {
  const URL = `${BASE_URL}/api/users/${uid}/destroy`;
  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(URL, requestOptions);

  if (response.status !== 204) {
    return Promise.reject(new Error('Error deleting user'));
  }

  return 'deleted';
};
