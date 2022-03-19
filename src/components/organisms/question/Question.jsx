import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => (
  <div className='border-b-2 pb-4  border-slate-200'>
    <p className='py-6 font-bold'>{question.description}</p>
    <input type='radio' id='radio-1' name='radio-options1' />
    <label htmlFor='radio-1' className='hover:text-teal-400'>{question.option1}</label>
    <br />
    <input type='radio' id='radio-2' name='radio-options1' />
    <label htmlFor='radio-2' className='hover:text-teal-400'>{question.option2}</label>
    <br />
    <input type='radio' id='radio-3' name='radio-options1' />
    <label htmlFor='radio-3' className='hover:text-teal-400'>{question.option3}</label>
    <br />
    <input type='radio' id='radio-4' name='radio-options1' />
    <label htmlFor='radio-4' className='hover:text-teal-400'>{question.option4}</label>
  </div>
);

export default Question;

Question.propTypes = {
  question: PropTypes.shape({
    description: PropTypes.string.isRequired,
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string.isRequired,
    option3: PropTypes.string,
    option4: PropTypes.string,
  }).isRequired,
};