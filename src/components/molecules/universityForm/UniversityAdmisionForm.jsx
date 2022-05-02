const UniversityAdmisionForm = () => {
  return (
    <div>
      <h3>Admision Process</h3>
      <ul>
        <li className='flex justify-between'>
          Step 1
          <button
            type='button'
            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          >
            Delete
          </button>
        </li>

        <li className='flex justify-between'>
          Step 2
          <button
            type='button'
            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          >
            Delete
          </button>
        </li>

        <li className='flex justify-between'>
          Step 3
          <button
            type='button'
            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          >
            Delete
          </button>
        </li>

        <li className='flex justify-between'>
          Step 4
          <button
            type='button'
            className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
          >
            Delete
          </button>
        </li>

      </ul>
      <input type='text' />
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        Add step
      </button>
    </div>
  );
};

export default UniversityAdmisionForm;
