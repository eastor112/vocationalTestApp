const BASE_URL = process.env.REACT_APP_ENV === 'develop' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

export const getAllUniversities = async () => {
  const URL = `${BASE_URL}/api/universities?limit=20&page=1`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getUniversityById = async (id) => {
  const URL = `${BASE_URL}/api/universities/${id}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getUniversitiesByCountry = async (country) => {
  const URL = `${BASE_URL}/api/search/universities/${country}?target=country`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getUniversitiesByName = async (name) => {
  const URL = `${BASE_URL}/api/search/universities/${name}?target=name`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getUniversitiesByCareer = async (career) => {
  const query = career.split(' ').join('|');

  const URL = `${BASE_URL}/api/search/universities/${query}?target=career`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
