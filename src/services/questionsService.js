const BASE_URL = process.env.REACT_APP_ENV === 'develop'
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PROD;

// export const getAllTestQuestionsService = async (testId) => {
//   const URL = `${BASE_URL}/api/search/questions/${testId}`;

//   const token = localStorage.getItem('token');

//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(test),
//   };
//   const response = await fetch(URL, requestOptions);

//   if (response.status === 200) {
//     const updatedTest = await response.json();
//     return updatedTest;
//   }

//   throw new Error('Error updating test');
// };

export const updateQuestionService = async (id, question) => {
  const URL = `${BASE_URL}/api/questions/${id}`;
  const token = localStorage.getItem('token');

  const {
    statement,
    optionA,
    optionB,
    optionC,
    optionD,
  } = question;

  const body = {
    statement,
    optionA,
    optionB,
    optionC,
    optionD,
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

export const createQuestionService = async (test) => {
  const URL = `${BASE_URL}/api/questions`;
  const token = localStorage.getItem('token');

  const data = {
    test,
  };
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const newQuestion = await response.json();
  return newQuestion;
};

export const deleteQuestionService = async (id) => {
  const URL = `${BASE_URL}/api/questions/${id}`;
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(URL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status !== 204) {
      return Promise.reject(response.status);
    }
    return response;
  } catch (error) {
    return error.message;
  }
};
