const CareerSkillsEditForm = () => {
  return (
    <div className='mt-8'>
      <div aria-label='career-description' className='relative top-1'>
        <label
          htmlFor='description'
          className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
        >
          Skills description
        </label>
        <textarea
          id='description'
          rows='3'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          placeholder='This pro.'
          name='description'
        />

        <div aria-label='field-list' className='mt-4'>
          <h3>Skills list </h3>
          <ul className='text-sm'>
            <li
              className='my-2 bg-white shadow-sm shadow-gray-400 rounded-lg p-1'
            >
              <div className='flex w-full justify-between items-center'>

                <p className='ml-2'>
                  <span className='mr-2'>
                    -
                  </span>
                  Tittle
                </p>

                <button
                  type='button'
                  className='flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-xs px-3 py-2'
                  onClick={() => { }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
              </div>
            </li>
            <li
              className='my-2 bg-white shadow-sm shadow-gray-400 rounded-lg p-1'
            >
              <div className='flex w-full justify-between items-center'>

                <p className='ml-2'>
                  <span className='mr-2'>
                    -
                  </span>
                  Tittle
                </p>

                <button
                  type='button'
                  className='flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-xs px-3 py-2'
                  onClick={() => { }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
          <div className='relative flex '>
            <input
              type='search'
              id='default-search'
              className='w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mr-2'
              placeholder='Add a new step'
              required=''
              name='newStep'
            />
            <button
              type='submit'
              className='text-white whitespace-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
              </svg>
            </button>
          </div>
        </div>

        <div aria-label='field-references' className='mt-4'>
          <h3>References</h3>
          <ul className='text-sm'>
            <li
              className='my-2 bg-white shadow-sm shadow-gray-400 rounded-lg p-1'
            >
              <div className='flex w-full justify-between items-center'>

                <p className='ml-2'>
                  <span className='mr-2'>
                    -
                  </span>
                  Tittle
                </p>

                <button
                  type='button'
                  className='flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-xs px-3 py-2'
                  onClick={() => { }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
              </div>
            </li>
            <li
              className='my-2 bg-white shadow-sm shadow-gray-400 rounded-lg p-1'
            >
              <div className='flex w-full justify-between items-center'>

                <p className='ml-2'>
                  <span className='mr-2'>
                    -
                  </span>
                  Tittle
                </p>

                <button
                  type='button'
                  className='flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-xs px-3 py-2'
                  onClick={() => { }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
          <div className='relative flex '>
            <input
              type='search'
              id='default-search'
              className='w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mr-2'
              placeholder='Add a new step'
              required=''
              name='newStep'
            />
            <button
              type='submit'
              className='text-white whitespace-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
              </svg>
            </button>
          </div>
        </div>

        <button
          type='button'
          className='mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        // onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default CareerSkillsEditForm;
