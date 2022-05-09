const BASE_URL = process.env.REACT_APP_ENV === 'develop' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

export const createCareer = async (name) => {
  const url = `${BASE_URL}/api/careers`;
  const token = localStorage.getItem('token');

  const data = {
    name,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 201) {
    return Promise.reject(response);
  }

  const newCareer = await response.json();

  return newCareer;
};

export const getAllCareers = async (limit = 10, page = 1) => {
  const URL = `${BASE_URL}/api/careers?limit=${limit}&page=${page}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getAllCareersNames = async () => {
  const URL = `${BASE_URL}/api/careers/names`;
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
};

export const getCareerById = async (id) => {
  const URL = `${BASE_URL}/api/careers/${id}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'error';
  }
};

export const getFilteredCareers = async (filter, limit = 10, page = 1) => {
  const URL = `${BASE_URL}/api/search/careers/${filter}?limit=${limit}&page=${page}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const updateMainCareer = async (id, data) => {
  const URL = `${BASE_URL}/api/careers/${id}`;
  const token = localStorage.getItem('token');

  const dataCopy = { ...data };

  if (dataCopy.file) {
    const formData = new FormData();
    formData.append('photo', dataCopy.file);

    const response = await fetch(URL, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.status !== 200) {
      return Promise.reject(response.status);
    }

    delete dataCopy.file;
  }

  try {
    const response = await fetch(URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataCopy),
    });
    const dataResponse = await response.json();
    return dataResponse;
  } catch (error) {
    return error.message;
  }
};

export const updateFieldCareer = async (id, data) => {
  const URL = `${BASE_URL}/api/careers/${id}`;
  const token = localStorage.getItem('token');

  const field = { field: { ...data } };

  try {
    const response = await fetch(URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(field),
    });

    const dataResponse = await response.json();
    return dataResponse;
  } catch (error) {
    return error.message;
  }
};

export const updateSkillsCareer = async (id, data) => {
  const URL = `${BASE_URL}/api/careers/${id}`;
  const token = localStorage.getItem('token');

  const skills = { skills: { ...data } };

  try {
    const response = await fetch(URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(skills),
    });

    const dataResponse = await response.json();
    return dataResponse;
  } catch (error) {
    return error.message;
  }
};

export const destroyCareer = async (id) => {
  const URL = `${BASE_URL}/api/careers/${id}/destroy`;
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(URL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 204) {
      return Promise.reject(response.status);
    }

    return response;
  } catch (error) {
    return error.message;
  }
};

export const searchCareers = async (query, limit = 10, page = 1) => {
  const URL = `${BASE_URL}/api/search/careers/${query}?limit=${limit}&page=${page}`;

  try {
    const response = await fetch(URL);

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
