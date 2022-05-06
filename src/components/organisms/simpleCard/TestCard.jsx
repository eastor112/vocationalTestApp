import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TestCard = ({ test }) => {
  return (
    <div className='flex flex-col justify-center w-68  border border-primary-1 overflow-hidden rounded-lg shadow-lg bg-white'>

      <figure className='h-32 overflow-hidden flex justify-center items-center'>
        <img className='h-32' src={require('../../../assets/test_1.jpg')} alt='test_figure' />
      </figure>

      <h3 className='font-medium text-center mb-2'>Short Vocational Test</h3>

      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <tbody>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-6 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap w-1/3'>
              Type:
            </th>
            <td className='px-6 py-1.5 w-2/3'>
              {test.type}
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-6 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Questions:
            </th>
            <td className='px-6 py-1.5'>
              {test.numberOfQuestions}
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-6 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Time:
            </th>
            <td className='px-6 py-1.5'>
              {test.estimatedTime}
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-6 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Author:
            </th>
            <td className='px-6 py-1.5'>
              {test.author}
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-6 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Status:
            </th>
            <td className='px-6 py-1.5'>
              {test.status}
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-6 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Created at:
            </th>
            <td className='px-6 py-1.5'>
              {test.createdAt}
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-6 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Updated at:
            </th>
            <td className='px-6 py-1.5'>
              {test.updatedAt}
            </td>
          </tr>
        </tbody>
      </table>

      <div className='p-5 flex flex-col items-center'>

        <div className='flex gap-1 mt-2 flex-wrap'>

          <Link to={`/dashboard/admin/tests/${test.id}/principal`}>
            <button
              type='button'
              className='flex text-green-500 hover:text-white border border-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-xs px-1 py-1.5 text-center mr-1 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              Info
            </button>
          </Link>

          <Link to={`/dashboard/admin/tests/${test.id}/principal`}>
            <button
              type='button'
              className='flex text-yellow-400 hover:text-white border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-xs px-1 py-1.5 text-center mr-1 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
              </svg>
              Update
            </button>
          </Link>

          <button
            type='button'
            className='flex text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-xs px-1 py-1.5 text-center mr-1 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
            </svg>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

TestCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  test: PropTypes.object.isRequired,
};

export default TestCard;
