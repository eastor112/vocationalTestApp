import React from 'react';
import singleQuestion from './SingleQuestion';

const Questions = () => {
  return (
    <div>

      <h2 className='font-medium'>Questions</h2>

      <div id='accordion-color' data-accordion='collapse' data-active-classes='bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white'>
        <h2 id='accordion-color-heading-1'>
          <button type='button' className='flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800' data-accordion-target='#accordion-color-body-1' aria-expanded='true' aria-controls='accordion-color-body-1'>
            <span>Question 1</span>
            <svg data-accordion-icon className='w-6 h-6 rotate-180 shrink-0' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
          </button>
        </h2>
        <div id='accordion-color-body-1' className='hidden' aria-labelledby='accordion-color-heading-1'>
          <div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
            <singleQuestion />
          </div>

        </div>
        <h2 id='accordion-color-heading-2'>
          <button type='button' className='flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800' data-accordion-target='#accordion-color-body-2' aria-expanded='false' aria-controls='accordion-color-body-2'>
            <span>Question 2</span>
            <svg data-accordion-icon className='w-6 h-6 shrink-0' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Questions;
