const descriptions = {
  A: 'The careers hat have the most what to do with your personality science related and health',
  B: 'You should think about doing some engineering or career technology',
  C: 'It is clear that you are more interested in subjects related to the social sciences, humanities and philologies.',
  D: 'You should consider studying arts or any artistic expression.',
};

const careers = {
  A: [
    'Biology',
    'Marine Sciences',
    'Geology',
    'Physics',
    'Mathematics',
    'Medicine',
    'Nursing',
    'Physiotherapy',
  ],
  B: [
    'Biotechnology',
    'chemistry',
    'Engineer',
  ],
  C: [
    'Social work',
    'Social education',
    'Literature',
  ],
  D: [
    'Design',
    'Photography',
    'Painting',
    'Sculpture',
  ],
};

export const careersResults = (questionsResponses) => {
  const responses = [...questionsResponses];

  const total = responses.length;

  const answers = { A: 0, B: 0, C: 0, D: 0 };

  responses.forEach((question) => {
    answers[question.userResponse] += 1;
  });

  const percents = {
    A: (answers.A / total) * 100,
    B: (answers.B / total) * 100,
    C: (answers.C / total) * 100,
    D: (answers.D / total) * 100,
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
  };
};
