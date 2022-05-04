import React from 'react';

const Principal = () => {
  return (
    <form>
      <div className='relative z-0 w-full mb-6 group'>
        <input type='title' name='floating_title' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
        <label htmlFor='floating_title' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Title</label>
      </div>
      <label htmlFor='countries' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Type</label>
      <select id='countries' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <option selected value='FREE'>Free</option>
        <option value='PREMIUM'>Premium</option>
      </select>
      <div className='relative z-0 w-full mb-6 group'>
        <input type='numberQuestions' name='floating_numberQuestions' id='floating_numberQuestions' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
        <label htmlFor='floating_numberQuestions' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Number of Questions</label>
      </div>
      <div className='grid xl:grid-col xl:gap-6'>
        <label htmlFor='countries' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>State</label>
        <select id='countries' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
          <option selected value='false'>False</option>
          <option value='true'>True</option>
        </select>
      </div>
    </form>
  );
};

export default Principal;
