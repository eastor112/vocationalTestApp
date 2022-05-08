import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import InputV2 from '../../atoms/input/InputV2';
import { useForm } from '../../../hooks/useForm';
import { updateMainTest } from '../../../services/vocationalServices';
import { updateTestAction } from '../../../context/actions/testAdmin-actions';

const Principal = ({ test }) => {
  const dispatch = useDispatch();
  const { formValues, handleFormChange } = useForm({
    title: test.title,
    type: test.type,
    numberOfQuestions: test.numberOfQuestions,
    state: test.state,
  });

  const {
    title,
    type,
    numberOfQuestions,
    state,
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTestAction(test.id, formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='relative z-0 w-full mb-6 pt-8 group'>
        <InputV2
          type='text'
          name='title'
          label='Title'
          value={title}
          onChange={handleFormChange}
        />
      </div>
      <div className='grid xl:grid-col xl:gap-6'>
        <label htmlFor='type' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Type</label>
        <select id='type' name='type' value={type} onChange={handleFormChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
          <option value='FREE'>Free</option>
          <option value='PREMIUM'>Premium</option>
        </select>
      </div>
      <div className='pt-6'>
        <InputV2
          type='number'
          name='numberOfQuestions'
          label='Number of questions'
          value={numberOfQuestions}
          onChange={handleFormChange}
        />
      </div>
      <div className='grid xl:grid-col xl:gap-6'>
        <label htmlFor='state' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>State</label>
        <select id='state' name='state' value={state} onChange={handleFormChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
          <option value='false'>False</option>
          <option value='true'>True</option>
        </select>
      </div>
      <div className='pt-6'>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Update
        </button>
      </div>
    </form>
  );
};

Principal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  test: PropTypes.object.isRequired,
};

export default Principal;
