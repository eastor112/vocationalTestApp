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

export const deleteQuestionService = async (questionId) => {

};
