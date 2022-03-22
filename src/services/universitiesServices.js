const API_URL = 'http://localhost:3001/api/universities';

export const getAllUniversities = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
