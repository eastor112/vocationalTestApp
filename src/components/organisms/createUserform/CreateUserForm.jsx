import { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import PropTypes from 'prop-types';
import { addInstitutionUserAction, addStudentUserAction } from '../../../context/actions/usersActions';
import { useForm } from '../../../hooks/useForm';

const CreateUserForm = ({ usersByPage, page }) => {
  const [error, setError] = useState(null);
  const [isInstitution, setIsInstitution] = useState(false);

  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm({
    email: '',
    password: '',
    name: '',
    country: 'CO',
    phone: '',
    url: '',
  });

  const {
    email,
    password,
    name,
    country,
    phone,
    url,
  } = formValues;

  const isFormValid = () => {
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return false;
    }
    if (!validator.isEmail(email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (!validator.isLength(password, { min: 6, max: 30 })) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (isInstitution && (name === '' || country === '' || phone === '' || url === '')) {
      setError('Please fill in all institutions fields');
      return false;
    }

    setError(null);
    return true;
  };

  const handleCheck = () => {
    setIsInstitution(!isInstitution);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      if (isInstitution) {
        dispatch(addInstitutionUserAction(
          email,
          password,
          name,
          country,
          phone,
          url,
          usersByPage,
          page,
        ));
      } else {
        dispatch(addStudentUserAction(email, password, usersByPage, page));
      }
    }
  };

  return (
    <form
      className='mt-6 flex flex-col'
      action=''
      onSubmit={handleCreateUser}
      method='POST'
    >
      {
        error
        && (
          <div
            data-cy='error-message'
            className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
            role='alert'
          >
            <span className='font-medium mr-2'>Error!</span>
            {error}
          </div>
        )

      }

      <div data-cy='email-input' aria-label='email' className='mb-5 flex flex-col gap-2'>
        <label htmlFor='email' className=''>
          <input
            id='email'
            type='email'
            placeholder='Email'
            className='border-b hover:border-b-2 focus:border-b-2 border-primary-1 w-full py-1 focus:ring-0'
            name='email'
            value={email}
            onChange={handleInputChange}
            autoComplete='off'
          />
        </label>
      </div>

      <div data-cy='pass-input' aria-label='password' className='mb-4 flex flex-col gap-2'>
        <label htmlFor='pass' className=''>
          <input
            id='pass'
            type='password'
            placeholder='Password'
            className='border-b hover:border-b-2 focus:border-b-2 border-primary-1 w-full py-1 focus:ring-0'
            name='password'
            value={password}
            onChange={handleInputChange}
            autoComplete='off'
          />
        </label>
      </div>

      <div aria-label='is-institution' className='mb-4 flex flex-col gap-2'>
        <label htmlFor='isInstitution' className='flex items-center'>
          <input
            data-cy='institution-checkbox'
            id='isInstitution'
            type='checkbox'
            className='border-primary-1 py-1 mr-2'
            name='isInstitution'
            checked={isInstitution}
            onChange={handleCheck}
          />
          Institution account
        </label>
      </div>

      {
        isInstitution && (
          <div aria-label='institition-data'>
            <div aria-label='institution-name' className='mb-5 flex flex-col gap-2'>
              <label htmlFor='name' className=''>
                <input
                  data-cy='institution-name'
                  id='name'
                  type='text'
                  placeholder='Institution name'
                  className='border hover:border-b-2 focus:border-b-2 border-primary-1 w-full py-1 px-3 focus:ring-0 focus:!outline-none'
                  name='name'
                  value={name}
                  onChange={handleInputChange}
                  autoComplete='off'
                />
              </label>
            </div>

            <div aria-label='country-phone' className='flex gap-5 w-full'>
              <div aria-label='country' className='mb-5 flex flex-col gap-2 flex-1'>
                <label htmlFor='country' className=''>
                  <select
                    data-cy='institution-country'
                    name='country'
                    id='country'
                    className='w-full h-9 text-sm'
                    value={country}
                    onChange={handleInputChange}
                  >
                    <option value='PE'>Perú</option>
                    <option value='CO'>Colombia</option>
                  </select>
                </label>
              </div>

              <div aria-label='phone' className='mb-4 flex flex-col gap-2 flex-1'>
                <label htmlFor='phone' className=''>
                  <input
                    data-cy='institution-phone'
                    id='phone'
                    type='tel'
                    placeholder='phone'
                    className='border hover:border-b-2 focus:border-b-2 border-primary-1 py-1 px-3 focus:ring-0 focus:!outline-none w-full h-9'
                    name='phone'
                    value={phone}
                    onChange={handleInputChange}
                    autoComplete='off'
                  />
                </label>
              </div>
            </div>

            <div aria-label='website' className='mb-4 flex flex-col gap-2'>
              <label htmlFor='url' className=''>
                <input
                  data-cy='institution-url'
                  id='url'
                  type='url'
                  placeholder='website'
                  className='border hover:border-b-2 focus:border-b-2 border-primary-1 w-full py-1 px-3 focus:ring-0 focus:!outline-none'
                  name='url'
                  value={url}
                  onChange={handleInputChange}
                  autoComplete='off'
                />
              </label>
            </div>
          </div>
        )
      }

      <button
        data-cy='submit-button'
        type='submit'
        className='bg-blue-500 relative text-white font-bold py-2 px-6  whitespace-nowrap rounded-sm hover:bg-blue-700'
      >
        Create account
      </button>

    </form>
  );
};

CreateUserForm.propTypes = {
  usersByPage: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default CreateUserForm;
