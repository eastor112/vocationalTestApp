import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name }) => {
  return (
    <div className='relative z-0 mb-6 w-full group'>
      <input
        type={type}
        name={name}
        id={name}
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-500 peer'
        required
      />

      <label
        htmlFor={name}
        className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-focus:dark:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        {name}
      </label>
    </div>
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
