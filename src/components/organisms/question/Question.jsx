import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => (
  <div className='border-b-2 pb-4  border-slate-200'>
    <p className='py-6 font-bold'>{question.description}</p>
    <input type='radio' id={`radio-${(question.id * 4 - 3).toString()}`} name={`radio-options-${question.id}`} value='a' />
    <label htmlFor={`radio-${(question.id * 4 - 3).toString()}`} className='hover:text-teal-400'>{question.option1}</label>
    <br />
    <input type='radio' id={`radio-${(question.id * 4 - 2).toString()}`} name={`radio-options-${question.id}`} value='b' />
    <label htmlFor={`radio-${(question.id * 4 - 2).toString()}`} className='hover:text-teal-400'>{question.option2}</label>
    <br />
    <input type='radio' id={`radio-${(question.id * 4 - 1).toString()}`} name={`radio-options-${question.id}`} value='c' />
    <label htmlFor={`radio-${(question.id * 4 - 1).toString()}`} className='hover:text-teal-400'>{question.option3}</label>
    <br />
    <input type='radio' id={`radio-${(question.id * 4).toString()}`} name={`radio-options-${question.id}`} value='d' />
    <label htmlFor={`radio-${(question.id * 4).toString()}`} className='hover:text-teal-400'>{question.option4}</label>
  </div>
);

export default Question;

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string.isRequired,
    option3: PropTypes.string,
    option4: PropTypes.string,
  }).isRequired,
};
