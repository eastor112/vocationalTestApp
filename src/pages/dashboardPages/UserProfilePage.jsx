import { useOutletContext } from 'react-router-dom';
import { Country, City } from 'country-state-city';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import InputV2 from '../../components/atoms/input/InputV2';
import { useForm } from '../../hooks/useForm';
import { updateUserDataAsync } from '../../context/actions/auth-actions';
import InputFile from '../../components/atoms/input/InputFile';

const UserProfilePage = () => {
  const width = useOutletContext();
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { formValues, handleFormChange, setFormValues } = useForm(user);

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const countriesSimplify = Country.getAllCountries().map((c) => {
      return {
        code: c.isoCode,
        name: c.name,
        phoneCode: c.phonecode,
      };
    });

    setCountries(countriesSimplify);

    if (formValues.address.country && formValues.address.country !== '') {
      setCities(City.getCitiesOfCountry(formValues.address.country));
    } else {
      setCities([]);
    }
  }, [token]);

  useEffect(() => {
    setFormValues(user);
    document.querySelector('#file').value = '';
  }, [user]);

  const handleFileChange = (ev) => {
    const file = ev.target.files[0];

    const e = {
      target: {
        name: 'file',
        value: file,
      },
    };
    handleFormChange(e);
  };

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setFormValues({
      ...formValues,
      address: {
        ...formValues.address,
        [e.target.name]: countryCode,
      },
    });

    const citiesCountry = City.getCitiesOfCountry(countryCode);

    setCities(citiesCountry);
  };

  const handleCityChange = (e) => {
    const cityCode = e.target.value;
    setFormValues({
      ...formValues,
      address: {
        ...formValues.address,
        [e.target.name]: cityCode,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserDataAsync(token, formValues));
  };

  return (
    <main className={`min-h-screen pt-10 pr-10 pb-6 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>
      {
        user.uid && (
          <form
            className='m-auto bg-white px-8 pt-6 pb-8 w-8/12  rounded-sm border border-gray-500'
            encType='multipart/form-data'
            onSubmit={handleSubmit}
          >
            <h2 className='text-xl font-medium text-dark-1 mb-4'>
              My profile
            </h2>

            <div className='grid xl:grid-cols-2 xl:gap-6'>
              <InputV2
                type='text'
                name='names'
                label='Names'
                value={formValues.names}
                onChange={handleFormChange}
              />

              <InputV2
                type='text'
                name='fatherName'
                label="Father's last name"
                value={formValues.fatherName}
                onChange={handleFormChange}
              />
            </div>

            <div className='grid xl:grid-cols-2 xl:gap-6'>
              <InputV2
                type='text'
                name='MotherName'
                label="mother's last name"
                value={formValues.motherName}
                onChange={handleFormChange}
              />
              <InputV2
                type='text'
                name='username'
                label='Username'
                value={formValues.username}
                onChange={handleFormChange}
              />
            </div>

            <div className='grid xl:grid-cols-2 xl:gap-6'>
              <InputV2
                type='email'
                name='email'
                label='Email'
                value={formValues.email}
                onChange={handleFormChange}
                disable
              />

              <InputV2
                type='tel'
                name='phone'
                label='Phone'
                value={formValues.phone}
                onChange={handleFormChange}
              />
            </div>

            <div className='grid xl:grid-cols-2 xl:gap-6 mb-7 xl:mb-2'>
              <InputV2
                type='text'
                name='role'
                label='Type account'
                value={formValues.role.toLowerCase()}
                onChange={handleFormChange}
                disable
              />

              <div className='flex h-10 gap-2'>
                <figure className='h-10 w-10 overflow-hidden flex justify-center items-center'>
                  <img
                    src={formValues.profile ? formValues.profile : 'https://via.placeholder.com/150'}
                    alt='profile'
                  />
                </figure>

                <InputFile name='file' onChange={handleFileChange} />
              </div>

            </div>

            <div className='grid xl:grid-cols-2 xl:gap-6'>

              <div className='flex flex-col relative mb-10'>
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
                  value={formValues.address.country}
                  onChange={handleCountryChange}
                >
                  {
                    countries.map((c) => {
                      return (
                        <option key={uuidv4()} value={c.code}>
                          {c.name}
                        </option>
                      );
                    })
                  }

                </select>
              </div>

              <div className='flex flex-col relative mb-10'>
                <label
                  htmlFor='city'
                  className='absolute -top-5 -left-1 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
                >
                  City
                </label>
                <select
                  id='city'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  name='city'
                  value={formValues.address.city}
                  onChange={handleCityChange}
                >
                  {
                    cities.map((c) => {
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
            >
              Update
            </button>

          </form>
        )
      }

    </main>

  );
};

export default UserProfilePage;
