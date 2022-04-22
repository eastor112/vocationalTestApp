const BASE_URL = process.env.REACT_APP_ENV === 'develop'
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PROD;

export const createQuestionResponseService = async (
  question,
  userResponse,
  testResult,
) => {
  const URL = `${BASE_URL}/questionResponse`;

  const token = localStorage.getItem('token');

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      question,
      userResponse,
      testResult,
    }),
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 201) {
    const questionResponse = await response.json();
    return questionResponse;
  }

  throw new Error('Error creating question response');
};
