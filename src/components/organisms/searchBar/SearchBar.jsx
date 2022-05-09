import { Country } from 'country-state-city';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { getAllUniversitiesCountryCodes, getUniversitiesByFilters } from '../../../services/universitiesServices';
import { getAllCareersNames } from '../../../services/careersServices';

const SearchBar = ({ setUniversities }) => {
  const [countries, setCountries] = useState([]);
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    getAllUniversitiesCountryCodes().then((arrayCodes) => {
      const universityCountries = arrayCodes.map((code) => Country.getCountryByCode(code));
      setCountries(universityCountries);
    });

    getAllCareersNames()
      .then((data) => {
        setCareers(data);
      });
  }, []);

  const [formValues, setFormValues] = useState({
    country: '',
    career: '',
    search: '',
    order: 'global',
  });

  const handleInputChange = (e) => {
    const field = e.target.name;
    const { value } = e.target;

    setFormValues({
      ...formValues,
      [field]: value,
    });

    if (field === 'country') {
      getUniversitiesByFilters(value, formValues.career, formValues.search)
        .then((data) => {
          setUniversities(data.results);
        });
    }
    if (field === 'career') {
      getUniversitiesByFilters(formValues.country, value, formValues.search)
        .then((data) => {
          setUniversities(data.results);
        });
    }
  };

  const handleSearchByName = (e) => {
    e.preventDefault();

    if (formValues.search !== '') {
      getUniversitiesByFilters(formValues.country, formValues.career, formValues.search)
        .then((data) => {
          setUniversities(data.results);
        });
    }
  };

  return (
    <div className='search-bar fixed flex flex-col-reverse xl:flex-row justify-between items-end xl:items-center w-[calc(100%-48px)]  md:w-[calc(100%-160px)] lg:w-[calc(100%-192px)] bg-white'>

      <div className='flex items-center gap-5 py-3'>
        <label
          htmlFor='country'
          className='block lg:flex items-center text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          Country:
          <select
            data-cy='country-select'
            id='country'
            className='ml-1 mt-2 lg:mt-0 w-32 sm:w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            name='country'
            value={formValues.country}
            onChange={handleInputChange}
          >
            <option key={uuidv4()} value=''> All</option>
            {
              countries.map((country) => {
                return (
                  <option key={uuidv4()} value={country.isoCode}>
                    {country.name}
                  </option>
                );
              })
            }
          </select>
        </label>

        <label
          htmlFor='career'
          className='block lg:flex items-center text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          Career:
          <select
            data-cy='career-select'
            id='career'
            className='ml-1 pr-8 mt-2 lg:mt-0 w-40 sm:w-44 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            name='career'
            value={formValues.career}
            onChange={handleInputChange}
          >

            <option key={uuidv4()} value=''> All </option>
            {
              careers.map((career) => {
                return (
                  <option key={uuidv4()} value={career}>
                    {career}
                  </option>
                );
              })
            }
          </select>
        </label>

        {/* <label
          htmlFor='order'
          className='hidden sm:block lg:flex items-center text-sm font-medium text-gray-
          900 dark:text-gray-400 whitespace-nowrap'
        >
          Order by:
          <select
            id='order'
            className='ml-1 mt-2 lg:mt-0 w-32 sm:w-36 bg-gray-50 border
            border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            name='order'
            value={formValues.order}
            onChange={handleInputChange}
          >
            <option value='ranking'>Ranking</option>
            <option value='distance'>Distance</option>
          </select>
        </label> */}
      </div>

      <form onSubmit={handleSearchByName} method='GET'>
        <div className='flex items-center'>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
              </svg>
            </div>
            <input
              data-cy='search-input'
              type='text'
              id='search'
              className='w-56 sm:w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='University name'
              name='search'
              value={formValues.search}
              onChange={handleInputChange}
              autoComplete='off'
            />
          </div>

          <button
            className='my-2 px-2 sm:px-8 py-2.5 ml-2  bg-neutral-2 hover:bg-neutral-1 text-white font-medium whitespace-nowrap rounded-lg'
            type='submit'
            onClick={handleSearchByName}
            value='Search'
          >
            Search
          </button>
        </div>
      </form>

    </div>
  );
};

SearchBar.propTypes = {
  setUniversities: PropTypes.func.isRequired,
};

export default SearchBar;
