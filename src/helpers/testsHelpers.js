const descriptions = {
  A: 'the careers that have the most to do with your personality are those that are related to science and health',
  B: 'you should think about doing some engineering or career technology',
  C: 'it is clear that you are interested in subjects related to the social sciences, humanities and philologies.',
  D: 'you should consider studying arts or any artistic expression.',
};

const careers = {
  A: [
    'Biology',
    'Geology',
    'Physics',
    'Mathematics',
    'Medicine',
    'Nursing',
    'Physiotherapy',
  ],
  B: [
    'Biotechnology',
    'Chemistry',
    'Engineer',
  ],
  C: [
    'Social work',
    'Education',
    'Literature',
  ],
  D: [
    'Graphics Design',
    'Photography',
    'Painting',
    'Sculpture',
  ],
};

export const gifs = [
  'https://media.giphy.com/media/3vPAVUcLAbIGs/giphy.gif',
  'https://media.giphy.com/media/lnlAifQdenMxW/giphy.gif',
  'https://media.giphy.com/media/Y4vdnmg54rD54Ytf30/giphy.gif',
];

export const careersResults = (questionsResponses) => {
  const responses = [...questionsResponses];

  const total = responses.length;

  const answers = { A: 0, B: 0, C: 0, D: 0 };

  responses.forEach((question) => {
    answers[question.userResponse] += 1;
  });

  const percents = {
    A: Math.round((answers.A / total) * 100),
    B: Math.round((answers.B / total) * 100),
    C: Math.round((answers.C / total) * 100),
    D: Math.round((answers.D / total) * 100),
  };

  const keys = Object.keys(answers);

  keys.sort((a, b) => { return answers[b] - answers[a]; });

  return {
    firstOption: {
      description: descriptions[keys[0]],
      careers: careers[keys[0]],
    },
    secondOption: {
      description: descriptions[keys[1]],
      careers: careers[keys[1]],
    },
    percents,
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
