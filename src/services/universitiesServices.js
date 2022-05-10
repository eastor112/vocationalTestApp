import { City, Country } from 'country-state-city';

const BASE_URL = process.env.REACT_APP_ENV === 'develop' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

export const getAllUniversitiesCountryCodes = async () => {
  const response = await fetch(`${BASE_URL}/api/universities/countries/codes`);

  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText));
  }

  return response.json();
};

export const getAllUniversities = async (limit = 20, page = 1) => {
  const URL = `${BASE_URL}/api/universities?limit=${limit}&page=${page}`;
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

export const getUniversitiesByName = async (name, limit = 4, page = 1) => {
  const URL = `${BASE_URL}/api/search/universities?name=${name}&limit=${limit}&page=${page}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getUniversitiesByCareer = async (careerId, limit = 4, page = 1) => {
  const URL = `${BASE_URL}/api/search/universities?career=${careerId}&limit=${limit}&page=${page}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getUniversitiesByFilters = async (
  country,
  career,
  name,
  limit = 20,
  page = 1,
) => {
  const URL = `${BASE_URL}/api/search/universities?country=${country}&career=${career}&name=${name}&limit=${limit}&page=${page}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
};

export const updatePrincipalUniversity = async (id, university) => {
  const URL = `${BASE_URL}/api/universities/${id}`;
  const token = localStorage.getItem('token');

  const {
    name,
    mission,
    vision,
    national,
    worldwide,
    url,
    country,
    city,
  } = university;

  let latitude = '';
  let longitude = '';

  if (city !== '') {
    const cities = City.getCitiesOfCountry(country);
    const cityy = cities.find((c) => c.name === city);
    latitude = cityy.latitude;
    longitude = cityy.longitude;
  }

  if (city === '' && country !== '') {
    const countryy = Country.getCountryByCode(country);
    latitude = countryy.latitude;
    longitude = countryy.longitude;
  }

  const body = {
    name,
    mission,
    vision,
    ranking: {
      national,
      worldwide,
    },
    url,
    address: {
      country,
      city,
      geo: {
        lat: latitude,
        lng: longitude,
      },
    },
  };

  try {
    const response = await fetch(URL, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const updateMediaUniversity = async (id, university) => {
  const URL = `${BASE_URL}/api/universities/${id}`;
  const token = localStorage.getItem('token');

  const { logo, campus } = university;

  const formData = new FormData();
  formData.append('logo', logo);
  formData.append('campus', campus);

  const requestOptions = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  };

  try {
    const response = await fetch(URL, requestOptions);

    if (response.status !== 200) {
      return Promise.reject(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const deleteUniversityImages = async (id, target, image) => {
  const URL = `${BASE_URL}/api/universities/${id}/dropimages?target=${target}&img=${image}`;
  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(URL, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const updateUniversityProcess = async (id, process) => {
  const URL = `${BASE_URL}/api/universities/${id}`;

  const token = localStorage.getItem('token');

  const body = {
    process,
  };

  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(URL, requestOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
};

export const updateUniversitySocialMedia = async (id, socialMedia) => {
  const URL = `${BASE_URL}/api/universities/${id}`;
  const token = localStorage.getItem('token');

  const body = {
    socialMedia,
  };

  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(URL, requestOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    return error.message;
  }
};
