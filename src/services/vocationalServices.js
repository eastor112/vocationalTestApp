const BASE_URL = process.env.REACT_APP_ENV === 'develop'
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PROD;

export const createTestResult = async (uid) => {
  const URL = `${BASE_URL}/api/results/`;

  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user: uid,
    }),
    redirect: 'follow',
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 201) {
    const testResult = await response.json();
    return testResult;
  }

  throw new Error('Error creating test result');
};
