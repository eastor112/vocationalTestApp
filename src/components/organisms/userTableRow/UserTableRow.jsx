const UserTableRow = () => {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-purple-100 dark:hover:bg-gray-600 h-12'>
      <td className='w-4 px-4'>
        <div className='flex items-center'>
          <input id='checkbox-table-search-1' type='checkbox' className='w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label htmlFor='checkbox-table-search-1' className='sr-only'>checkbox</label>
        </div>
      </td>
      <td className='hidden md:flex md:justify-center md:items-center md:h-12'>
        <figure className='rounded-full w-8'>
          <img src={require('../../../assets/avatar-male.png')} alt='avatar-png' />
        </figure>
      </td>
      <th scope='row' className='px-4 font-medium text-gray-900 dark:text-white whitespace-nowrap hidden lg:table-cell'>
        Emerson Maximo Asto Rodriguez
      </th>
      <td className='px-4'>
        emerar.mct@gmail.com
      </td>
      <td className='px-4 hidden sm:table-cell'>
        Free
      </td>
      <td className='px-4 hidden'>
        +51926569656
      </td>
      <td className='px-4 hidden sm:table-cell'>
        ADMIN
      </td>
      <td className='px-2 text-right whitespace-nowrap'>
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
  );
};

export default UserTableRow;
