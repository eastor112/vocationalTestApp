export const gifs = [
  'https://media.giphy.com/media/3vPAVUcLAbIGs/giphy.gif',
  'https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif',
  'https://media.giphy.com/media/Y4vdnmg54rD54Ytf30/giphy.gif',
];

export const processResponses = (questionsResponses) => {
  const responses = [...questionsResponses];

  const answers = { A: 0, B: 0, C: 0, D: 0 };

  responses.forEach((question) => {
    answers[question.userResponse] += 1;
  });

  const keys = Object.keys(answers);

  keys.sort((a, b) => { return answers[b] - answers[a]; });

  return {
    firstOption: keys[0],
    secondOption: keys[1],
    answers,
  };
};

export const setDataGraph = (
  data,
  borderWidth = 1,
) => {
  const values = Object.values(data);
  const keys = Object.keys(data);

  return {
    labels: keys,
    datasets: [
      {
        label: '# Responses',
        data: values,
        backgroundColor: [
          '#533e854e',
          '#488FB14e',
          '#4FD3C44e',
          '#C1F8CF4e',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(139, 235, 240, 1)',
        ],
        borderWidth,
      },
    ],
  };
};

export const numberAndPercentage = (number, total) => {
  return `${number} (${Math.round((number / total) * 100)}%)`;
};
