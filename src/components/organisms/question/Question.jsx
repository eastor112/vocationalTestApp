/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionResponseAction } from '../../../context/actions/solvingTest-actions';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);

  const { unsavedQuestionsResponses } = useSelector((state) => state.solvingTest);

  useEffect(() => {
    const actualQuestion = unsavedQuestionsResponses.find((q) => q.question === question.id);

    if (actualQuestion) {
      setSelectedOption(actualQuestion.userResponse);
    }
  }, [unsavedQuestionsResponses]);

  const handleInputChange = (e) => {
    dispatch(addQuestionResponseAction(question.id, e.target.value));
  };

  return (
    <div className='border-b-2 pb-4  border-slate-200'>

      <p className='py-6 font-bold'>{question.statement}</p>
      <input
        type='radio'
        id={`${question.id}-a`}
        name={`question-${question.id}`}
        value='A'
        className='mr-2'
        onChange={handleInputChange}
        checked={selectedOption === 'A'}
      />
      <label
        htmlFor={`${question.id}-a`}
        className='hover:text-teal-400'
      >
        {question.optionA}
      </label>
      <br />

      <input
        type='radio'
        id={`${question.id}-b`}
        name={`question-${question.id}`}
        value='B'
        className='mr-2'
        onChange={handleInputChange}
        checked={selectedOption === 'B'}
      />
      <label
        htmlFor={`${question.id}-b`}
        className='hover:text-teal-400'
      >
        {question.optionB}

      </label>
      <br />

      <input
        type='radio'
        id={`${question.id}-c`}
        name={`question-${question.id}`}
        value='C'
        className='mr-2'
        onChange={handleInputChange}
        checked={selectedOption === 'C'}
      />
      <label
        htmlFor={`${question.id}-c`}
        className='hover:text-teal-400'
      >
        {question.optionC}

      </label>
      <br />

      <input
        type='radio'
        id={`${question.id}-d`}
        name={`question-${question.id}`}
        value='D'
        className='mr-2'
        onChange={handleInputChange}
        checked={selectedOption === 'D'}
      />
      <label
        htmlFor={`${question.id}-d`}
        className='hover:text-teal-400'
      >
        {question.optionD}
      </label>
    </div>
  );
};

export default React.memo(Question);

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    statement: PropTypes.string.isRequired,
    optionA: PropTypes.string.isRequired,
    optionB: PropTypes.string.isRequired,
    optionC: PropTypes.string,
    optionD: PropTypes.string,
  }).isRequired,
};
