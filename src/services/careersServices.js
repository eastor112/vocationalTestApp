const BASE_URL = process.env.REACT_APP_ENV === 'develop' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

export const getAllCareers = async () => {
  const URL = `${BASE_URL}/api/careers`;
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

export const getFilteredCareers = async (filter) => {
  const URL = `${BASE_URL}/api/search/careers/${filter}?limit=10&page=1`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
