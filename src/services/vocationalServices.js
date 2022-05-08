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

export const getTestyById = async (id) => {
  const URL = `${BASE_URL}/api/tests/${id}`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'GET',
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

export const fetchAllTestsResultsService = async (uid) => {
  const URL = `${BASE_URL}/api/search/results/${uid}?target=user`;

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

  throw new Error('Error getting results');
};

export const fetchOneTestResultService = async (testId) => {
  const URL = `${BASE_URL}/api/results/${testId}`;

  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 200) {
    const testResult = await response.json();
    return testResult;
  }

  throw new Error('Error getting test result');
};

export const updateMainTest = async (testId, test) => {
  const URL = `${BASE_URL}/api/tests/${testId}`;

  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(test),
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 200) {
    const updatedTest = await response.json();
    return updatedTest;
  }

  throw new Error('Error updating test');
};

export const updateResultsVocationalTest = async (testId, resA, resB, resC, resD, resE) => {
  const URL = `${BASE_URL}/api/tests/${testId}`;
  const token = localStorage.getItem('token');
  const results = {
    A: resA,
    B: resB,
    C: resC,
    D: resD,
    E: resE,
  };

  const requestOptions = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ results }),
  };
  const response = await fetch(URL, requestOptions);
  if (response.status !== 200) {
    return Promise.reject(new Error('Error updating test'));
  }
  const updatedTest = await response.json();
  return updatedTest;
};

export const updateDescriptionsTest = async (testId, descriptions) => {
  console.log(descriptions);
  const URL = `${BASE_URL}/api/tests/${testId}`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ descriptions }),
  };
  const response = await fetch(URL, requestOptions);
  if (response.status !== 200) {
    return Promise.reject(new Error('Error updating test'));
  }
  const updatedTest = await response.json();
  console.log(updatedTest);
  return updatedTest;
};
