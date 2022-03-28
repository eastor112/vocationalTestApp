const API_URL = 'http://localhost:3001/api/universities';

export const getAllUniversities = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'error';
  }
};

export const getUniversityById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'error';
  }
};
