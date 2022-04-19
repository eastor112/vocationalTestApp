import { useOutletContext } from 'react-router-dom';
import UserTableRow from '../../components/organisms/userTableRow/UserTableRow';

const UsersListPage = () => {
  const width = useOutletContext();
  return (
    <main className={`min-h-screen w-screen pt-4 pr-10 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>
      <div className='py-4'>
        <label htmlFor='table-search' className='sr-only'>Search</label>
        <div className='relative mt-1'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
          </div>
          <input type='text' id='table-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search an user' />
        </div>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg mr-10'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-4'>
                <div className='flex items-center'>
                  <input id='checkbox-all-search' type='checkbox' className='w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                  <label htmlFor='checkbox-all-search' className='sr-only'>checkbox</label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3 hidden md:table-cell'>
                <span className='sr-only'>Edit</span>
              </th>
              <th scope='col' className='px-4 py-3 hidden lg:table-cell'>
                User
              </th>
              <th scope='col' className='px-4 py-3'>
                Email
              </th>
              <th scope='col' className='px-4 py-3 hidden sm:table-cell'>
                Type
              </th>
              <th scope='col' className='px-4 py-3 hidden sm:table-cell'>
                Role
              </th>
              <th scope='col' className='px-4 py-3 hidden '>
                Phone
              </th>
              <th scope='col' className='px-4 py-3'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <UserTableRow />
            <UserTableRow />
            <UserTableRow />
            <UserTableRow />
            <UserTableRow />
            <UserTableRow />
            <UserTableRow />
            <UserTableRow />
            <UserTableRow />
          </tbody>
        </table>
      </div>

      <div className='flex flex-col items-center mt-6'>

        <span className='text-sm text-gray-700 dark:text-gray-400'>
          Showing
          <span className='font-semibold text-gray-900 dark:text-white mx-1'>1</span>
          to
          <span className='font-semibold text-gray-900 dark:text-white mx-1'>10</span>
          of
          <span className='font-semibold text-gray-900 dark:text-white mx-1'>100</span>
          Entries
        </span>
        <div className='inline-flex mt-2 xs:mt-0'>

          <button type='button' className='inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-purple-500 rounded-l hover:bg-purple-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            <svg className='mr-2 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z' clipRule='evenodd' />
            </svg>
            Prev
          </button>
          <button type='button' className='inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-purple-500 rounded-r border-0 border-l border-gray-700 hover:bg-purple-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
            Next
            <svg className='ml-2 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
              <path fillRule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
          </button>
        </div>
      </div>

      <button type='button' className='h-11 w-11  rounded-full bottom-5 right-5 text-white bg-purple-500 flex justify-center items-center shadow-md shadow-gray-500 hover:bg-purple-600 fixed'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
        </svg>
      </button>

    </main>
  );
};

export default UsersListPage;
