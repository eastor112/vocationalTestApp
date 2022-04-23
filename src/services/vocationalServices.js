const BASE_URL = process.env.REACT_APP_ENV === 'develop'
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PROD;

export const createTestResultService = async (uid, testId, answers, firstOption, secondOption) => {
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
      test: testId,
      answers,
      firstOption,
      secondOption,
    }),
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 201) {
    const testResult = await response.json();
    return testResult;
  }

  throw new Error('Error creating test result');
};

export const fetchAllTestsService = async () => {
  const URL = `${BASE_URL}/api/tests/`;

  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 200) {
    const { tests } = await response.json();
    return tests;
  }

  throw new Error('Error getting tests');
};

export const getTestService = async (testId) => {
  const URL = `${BASE_URL}/api/tests/${testId}`;

  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 200) {
    const test = await response.json();
    return test;
  }

  throw new Error('Error getting test');
};

export const getAllTestQuestionsService = async (testId) => {
  const URL = `${BASE_URL}/api/search/questions/${testId}?limit=20`;

  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 200) {
    const { results } = await response.json();
    return results;
  }

  throw new Error('Error getting questions');
};
