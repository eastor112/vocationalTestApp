import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Country } from 'country-state-city';

const UniversityCardV2 = ({ university }) => {
  const searchCountrybyCode = (code) => {
    const country = Country.getCountryByCode(code);
    return country.name;
  };

  return (
    <div
      data-cy='university-card'
      className='card rounded-md bg-white p-4 mb-2 w-72'

    >
      <div className='flex flex-col gap-4'>
        {
          (university.logo !== '' && university.logo)
            ? (
              <figure className='h-10 ml-3'>
                <img className='logo h-full' src={university.logo} alt={university.name} />
              </figure>
            )
            : (
              <div className='h-10' />
            )
        }
      </div>
      <div className='p-3'>
        <h3 className='font-medium text-[0.7rem] text-center mb-2 h-10'>{university.name.toUpperCase()}</h3>
        <p className='text-xs mb-1'>
          <span className='font-medium text-sm mr-1'>
            Location:
          </span>
          {
            ` ${university.address.city}, ${university.address.country ? searchCountrybyCode(university.address.country) : ''}`
          }
        </p>

        <p className='text-xs mb-1'>
          <span className='font-medium text-sm mr-1'>World Rank:</span>
          {university.ranking.worldwide}
        </p>
        <p className='text-xs mb-3'>
          <span className='font-medium text-sm mr-1'>
            National Rank:
          </span>
          {university.ranking.national}
        </p>
      </div>

      <div className='flex gap-1 mt-4 flex-wrap'>

        <Link
          to={`/university/${university.id}`}
          className='flex text-green-500 hover:text-white border border-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-xs px-2 py-1.5 text-center mr-1 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          Detail
        </Link>

        <Link
          to={`/dashboard/institution/${university.id}/principal`}
          className='flex text-yellow-400 hover:text-white border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-xs px-2 py-1.5 text-center mr-1 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900'
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
          </svg>
          Update
        </Link>

        <button
          type='button'
          className='flex text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-xs px-2 py-1.5 text-center mr-1 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
};

UniversityCardV2.propTypes = {
  university: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
    campus: PropTypes.arrayOf(PropTypes.string).isRequired,
    ranking: PropTypes.shape({
      national: PropTypes.number.isRequired,
      worldwide: PropTypes.number.isRequired,
    }).isRequired,
    address: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
    vision: PropTypes.string.isRequired,
  }).isRequired,
};

export default UniversityCardV2;
