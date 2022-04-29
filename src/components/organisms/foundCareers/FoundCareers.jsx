import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 as uidv4 } from 'uuid';

const FoundCareers = ({ careers, closeModal }) => {
  return (
    <div>
      {
        careers.length > 0
          ? (
            <h5 className='font-medium mb-4'>
              {
                careers.length > 1
                  ? 'These careers match with your choice:'
                  : 'This career match with your choice:'
              }
            </h5>
          )

          : (
            <h5 className='font-medium mb-4'>
              Sorry, we couldn&apos;t find any career that matches with your choice.
            </h5>
          )

      }
      <div className='flex flex-wrap gap-4 max-w-4xl'>
        {
          careers.map((career) => (
            <div
              key={uidv4()}
              className='gap-5 p-4 w-52 bg-white rounded-lg border border-gray-400 shadow-md'
            >
              <h5 className='flex-1 mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white'>
                {career.name}
              </h5>

              <p className='flex-1 font-normal text-xs text-gray-700 dark:text-gray-400 my-4'>
                {`${career.description.substring(0, 50)}...`}
              </p>

              <Link
                to={`/careers/${career.id}`}
                className='flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 whitespace-nowrap'
              >
                See details
              </Link>
            </div>
          ))
        }
      </div>

      <div className='flex justify-center'>
        <button
          type='button'
          className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-5 py-1.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-4'
          onClick={closeModal}
        >
          Go back
        </button>

      </div>
    </div>
  );
};
FoundCareers.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  careers: PropTypes.array.isRequired,
  closeModal: PropTypes.func.isRequired,

};

export default FoundCareers;
