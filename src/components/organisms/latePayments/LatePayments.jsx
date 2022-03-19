import React from 'react';

function LatePayments() {
  return (
    <div className='late-payments'>

      <h3 className='text-sm font-bold mb-3 mt-6'>Subscriptors with late Payments</h3>

      <table className='w-full'>
        <thead className='text-sm text-dark-2'>
          <tr className='border-b border-solid border-primary-1'>
            <th className='whitespace-nowrap'>Id</th>
            <th className='whitespace-nowrap'>User name</th>
            <th className='whitespace-nowrap'>Payment status</th>
            <th className='whitespace-nowrap'>Actions</th>
          </tr>
        </thead>
        <tbody className='text-xs'>
          <tr className='border-b border-solid border-primary-1 text-center h-fit'>
            <td>{(Math.random() * 45000).toFixed(0)}</td>
            <td>Albert Einsten</td>
            <td className='flex items-center h-6'>
              <span className='w-2/4 text-center bg-red-200 text-red-600 rounded-sm border border-solid border-gray-600'>overdue</span>
              <p className='w-2/4 text-left ml-2 whitespace-nowrap'>for 08d-07h</p>
            </td>

            <td className=''>
              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-success-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </button>

              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-neutral-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </button>

              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-danger-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </button>
            </td>
          </tr>

          <tr className='border-b border-solid border-primary-1 text-center h-6'>
            <td>{(Math.random() * 45000).toFixed(0)}</td>
            <td>Nicola Tesla</td>
            <td className='flex items-center h-6'>
              <span className='w-2/4 text-center bg-yellow-200 text-yellow-600 rounded-sm border border-solid border-gray-600'>due</span>
              <p className='w-2/4 text-left ml-2 whitespace-nowrap'>for 03d-12h</p>
            </td>
            <td className=''>
              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-success-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </button>

              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-neutral-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </button>

              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-danger-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </button>
            </td>
          </tr>

          <tr className='border-b border-solid border-primary-1 text-center h-6'>
            <td>{(Math.random() * 45000).toFixed(0)}</td>
            <td>Isaac Newton</td>
            <td className='flex items-center h-6'>
              <span className='w-2/4 text-center bg-yellow-200 text-yellow-600 rounded border border-solid border-gray-600'>due</span>
              <p className='w-2/4 text-left ml-2 whitespace-nowrap'>for 03d-12h</p>
            </td>
            <td className=''>
              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-success-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </button>

              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-neutral-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </button>

              <button type='button' className='mx-1'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-danger-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default LatePayments;
