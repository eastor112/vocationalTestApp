import React from 'react';

function GeneralStats() {
  return (
    <div className='general-stats grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8'>

      <div className='stat min-w-fit p-2 bg-light-2 flex items-center rounded-lg'>
        <figure className='m-4 rounded-full w-12 h-12 lg:w-14 lg:h-14 overflow-hidden flex flex-shrink-0 justify-center items-center bg-blue-200'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-blue-600' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
          </svg>
        </figure>
        <div className=''>
          <h3 className='font-bold text-lg'>1 478 286</h3>
          <p className='whitespace-nowrap text-sm text-gray-600'>Total visits</p>
          <p className='whitespace-nowrap text-xs text-gray-600 flex items-center'>
            <span className='flex items-center text-success-1 mr-1'>
              <svg xmlns='http://www.w3.org/2000/svg' className='inline-block h-4 w-4 lg:h-6 lg:w-6 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
              </svg>
              4.07%
            </span>
            <p>
              Last month
            </p>
          </p>
        </div>
      </div>

      <div className='stat min-w-fit p-2 bg-light-2 flex items-center rounded-lg'>
        <figure className='m-4 rounded-full w-12 h-12 lg:w-14 lg:h-14 overflow-hidden flex flex-shrink-0 justify-center items-center bg-green-200'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' />
          </svg>
        </figure>
        <div className=''>
          <h3 className='font-bold text-lg'>478 520</h3>
          <p className='whitespace-nowrap text-sm text-gray-600'>Total vocational test</p>
          <p className='whitespace-nowrap text-xs text-gray-600 flex items-center'>
            <span className='flex items-center text-success-1 mr-1'>
              <svg xmlns='http://www.w3.org/2000/svg' className='inline-block h-4 w-4 lg:h-6 lg:w-6 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
              </svg>
              0.24%
            </span>
            Last month
          </p>
        </div>
      </div>

      <div className='stat min-w-fit p-2 bg-light-2 flex items-center rounded-lg'>
        <figure className='m-4 rounded-full w-12 h-12 lg:w-14 lg:h-14 overflow-hidden flex flex-shrink-0 justify-center items-center bg-violet-200'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-violet-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
          </svg>
        </figure>
        <div className=''>
          <h3 className='font-bold text-lg'>1 872</h3>
          <p className='whitespace-nowrap text-sm text-gray-600'>Total subscriptions</p>
          <p className='whitespace-nowrap text-xs text-gray-600 flex items-center'>
            <span className='flex items-center text-red-600 mr-1'>
              <svg xmlns='http://www.w3.org/2000/svg' className='inline-block h-4 w-4 lg:h-6 lg:w-6 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6' />
              </svg>
              1.64%
            </span>
            <p>
              Last month
            </p>
          </p>
        </div>
      </div>

      <div className='stat min-w-fit p-2 bg-light-2 flex items-center rounded-lg'>
        <figure className='m-4 rounded-full w-12 h-12 lg:w-14 lg:h-14 overflow-hidden flex flex-shrink-0 justify-center items-center bg-yellow-100'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-yellow-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' />
          </svg>
        </figure>
        <div className=''>
          <h3 className='font-bold text-lg'>5 367</h3>
          <p className='whitespace-nowrap text-sm text-gray-600'>Total chat interactions</p>
          <p className='whitespace-nowrap text-xs text-gray-600 flex items-center'>
            <span className='flex items-center text-warning-1 mr-1'>
              <svg xmlns='http://www.w3.org/2000/svg' className='inline-block h-4 w-4 lg:h-6 lg:w-6 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
              0.00%
            </span>
            <p>
              Last month
            </p>
          </p>
        </div>
      </div>

    </div>
  );
}

export default GeneralStats;
