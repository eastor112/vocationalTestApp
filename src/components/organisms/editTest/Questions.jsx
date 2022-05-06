import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllTestQuestionsService, getTestyById } from '../../../services/vocationalServices';

import SingleQuestion from './SingleQuestion';

const Questions = (testId) => {
  const { id } = useParams();
  const [test, setTest] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getTestyById(id).then((data) => {
      if (data === 'error') {
        return 'error';
      }
      return setTest(data);
    });
  }, [id]);

  useEffect(() => {
    getAllTestQuestionsService(testId).then((data) => {
      setQuestions(data);
    });
  }, [id]);

  return (
    <div>
      {
        questions.map((question) => (
          <SingleQuestion
            question={question}
            test={test}
            testId={testId}
          />
        ))
      }
    </div>

  );
};

Questions.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  testId: PropTypes.string.isRequired,
};

export default Questions;
