const API_URL = 'http://localhost:3001/api/careers/';

export const getCareerById = async (id) => {
  try {
    const response = await fetch(`${API_URL}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
