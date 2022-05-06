/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestionResponseAction } from '../../../context/actions/solvingTest-actions';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    unsavedQuestionsResponses,
    savedQuestionsResponses,
  } = useSelector((state) => state.solvingTest);

  useEffect(() => {
    const actualQuestion = unsavedQuestionsResponses?.find((q) => q.question === question.id);

    if (actualQuestion) {
      setSelectedOption(actualQuestion.userResponse);
    }
  }, [unsavedQuestionsResponses]);

  const handleInputChange = (e) => {
    dispatch(addQuestionResponseAction(question.id, e.target.value));
  };

  return (
    <div className='border-b-2 pb-4  border-slate-200'>

      <p data-cy='statement-question' className='py-6 font-bold'>
        {question.statement}
      </p>

      <input
        data-cy='input-question-a'
        type='radio'
        id={`${question.id}-a`}
        name={`question-${question.id}`}
        value='A'
        className={`checked:bg-teal-600 checked:border-teal-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ${savedQuestionsResponses.length > 0 && 'form-check-input appearance-none border-gray-300 bg-white'}`}
        onChange={handleInputChange}
        checked={selectedOption === 'A'}
        disabled={savedQuestionsResponses?.length > 0}
      />
      <label
        htmlFor={`${question.id}-a`}
        className={(savedQuestionsResponses?.length > 0 && selectedOption !== 'A') ? 'form-check-label inline-block text-gray-800 opacity-50' : 'text-black hover:text-teal-700 cursor-pointer'}
      >
        {question.optionA}
      </label>
      <br />

      <input
        data-cy='input-question-b'
        type='radio'
        id={`${question.id}-b`}
        name={`question-${question.id}`}
        value='B'
        className={`checked:bg-teal-600 checked:border-teal-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ${savedQuestionsResponses.length > 0 && 'form-check-input appearance-none border-gray-300 bg-white'}`}
        onChange={handleInputChange}
        checked={selectedOption === 'B'}
        disabled={savedQuestionsResponses?.length > 0}
      />
      <label
        htmlFor={`${question.id}-b`}
        className={(savedQuestionsResponses?.length > 0 && selectedOption !== 'B') ? 'form-check-label inline-block text-gray-800 opacity-50' : 'text-black hover:text-teal-700 cursor-pointer'}
      >
        {question.optionB}

      </label>
      <br />

      <input
        data-cy='input-question-c'
        type='radio'
        id={`${question.id}-c`}
        name={`question-${question.id}`}
        value='C'
        className={`checked:bg-teal-600 checked:border-teal-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ${savedQuestionsResponses.length > 0 && 'form-check-input appearance-none border-gray-300 bg-white'}`}
        onChange={handleInputChange}
        checked={selectedOption === 'C'}
        disabled={savedQuestionsResponses?.length > 0}
      />
      <label
        htmlFor={`${question.id}-c`}
        className={(savedQuestionsResponses?.length > 0 && selectedOption !== 'C') ? 'form-check-label inline-block text-gray-800 opacity-50' : 'text-black hover:text-teal-700 cursor-pointer'}
      >
        {question.optionC}

      </label>
      <br />

      <input
        data-cy='input-question-d'
        type='radio'
        id={`${question.id}-d`}
        name={`question-${question.id}`}
        value='D'
        className={`checked:bg-teal-600 checked:border-teal-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 ${savedQuestionsResponses.length > 0 && 'form-check-input appearance-none border-gray-300 bg-white'}`}
        onChange={handleInputChange}
        checked={selectedOption === 'D'}
        disabled={savedQuestionsResponses?.length > 0}
      />
      <label
        htmlFor={`${question.id}-d`}
        className={(savedQuestionsResponses?.length > 0 && selectedOption !== 'D') ? 'form-check-label inline-block text-gray-800 opacity-50' : 'text-black hover:text-teal-700 cursor-pointer'}
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
