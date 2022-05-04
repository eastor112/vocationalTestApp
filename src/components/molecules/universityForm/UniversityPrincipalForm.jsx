import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { City, Country } from 'country-state-city';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import InputV2 from '../../atoms/input/InputV2';
import { updateActiveUniversityPrincipalAction } from '../../../context/actions/universities-actions';

const UniversityPrincipalForm = ({ university }) => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const dispatch = useDispatch();

  const { formValues, handleFormChange, setFormValues } = useForm({
    name: university.name,
    mission: university.mission,
    vision: university.vision,
    national: university.ranking.national,
    worldwide: university.ranking.worldwide,
    url: university.url,
    country: university.address.country,
    city: university.address.city,
  });

  const {
    name,
    mission,
    vision,
    national,
    worldwide,
    url,
    country,
    city,
  } = formValues;

  useEffect(() => {
    setCountries(Country.getAllCountries());
    setCities(City.getCitiesOfCountry(country));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateActiveUniversityPrincipalAction(university.id, formValues));
  };

  const handleSelectChange = (e) => {
    const { name: field, value } = e.target;

    if (field === 'country') {
      setCities(City.getCitiesOfCountry(value));
      setFormValues({
        ...formValues,
        city: '',
      });
    }

    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  return (
    <form className='mt-6'>
      <InputV2
        type='text'
        name='name'
        label='Name'
        value={name}
        onChange={handleFormChange}
      />

      <div aria-label='mission' className='relative top-1'>
        <label
          htmlFor='mission'
          className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
        >
          Mission
        </label>
        <textarea
          id='mission'
          rows='3'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          placeholder='Our mission is to...'
          name='mission'
          value={mission}
          onChange={handleFormChange}
        />
      </div>

      <div aria-label='vision' className='relative top-1 mb-6'>
        <label
          htmlFor='vision'
          className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
        >
          Vision
        </label>
        <textarea
          id='vision'
          rows='3'
          className='mt-8 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Our vision is to...'
          name='vision'
          value={vision}
          onChange={handleFormChange}
        />
      </div>

      <div className='grid xl:grid-cols-2 xl:gap-6'>
        <InputV2
          type='number'
          label='Global rank'
          name='worldwide'
          value={worldwide}
          onChange={handleFormChange}
        />

        <InputV2
          type='number'
          label='National rank'
          name='national'
          value={national}
          onChange={handleFormChange}
        />
      </div>

      <InputV2
        type='url'
        label='Web Page'
        name='url'
        value={url}
        onChange={handleFormChange}
      />

      <div className='grid xl:grid-cols-2 xl:gap-6 pt-2'>
        <div aria-label='country-select' className='flex flex-col relative mb-10'>
          <label
            htmlFor='country'
            className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
          >
            Country
          </label>

          <select
            id='address.country'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            name='country'
            value={country}
            onChange={handleSelectChange}
          >
            <option key={uuidv4()} value=''>Select a country</option>
            {
              countries?.map((c) => {
                return (
                  <option key={uuidv4()} value={c.isoCode}>
                    {c.name}
                  </option>
                );
              })
            }
          </select>
        </div>

        <div aria-label='city-select' className='flex flex-col relative mb-10'>
          <label
            htmlFor='city'
            className='absolute -top-5 -left-1 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
          >
            City
          </label>
          <select
            id='city'
            className={`border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2
            ${cities.length === 0 ? 'bg-gray-400' : 'bg-gray-50 border'}`}
            name='city'
            value={city}
            onChange={handleSelectChange}
            disabled={cities.length === 0}
          >
            <option key={uuidv4()} value=''>Select a city</option>
            {
              cities?.map((c) => {
                return (
                  <option key={uuidv4()} value={c.name}>
                    {c.name}
                  </option>
                );
              })
            }
          </select>
        </div>
      </div>

      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={handleSubmit}
      >
        Update
      </button>

    </form>
  );
};

UniversityPrincipalForm.propTypes = {
  university: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    mission: PropTypes.string,
    vision: PropTypes.string,
    address: PropTypes.shape({
      country: PropTypes.string,
      city: PropTypes.string,
    }),
    ranking: PropTypes.shape({
      national: PropTypes.number,
      worldwide: PropTypes.number,
    }),
    url: PropTypes.string,
  }).isRequired,
};
export default UniversityPrincipalForm;
