import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { loginAsync } from '../../../actions/auth-actions';
import { setError, clearError, setLoading } from '../../../actions/ui-actions';
import { useForm } from '../../../hooks/useForm';

const LoginOrSignupForm = ({ title }) => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.ui);

  const [isInstitution, setIsInstitution] = useState(false);

  const { formValues, handleInputChange } = useForm({
    email: '',
    password: '',
    name: '',
    country: 'peru',
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

  const handleCheck = () => {
    setIsInstitution(!isInstitution);
  };

  const isFormValid = () => {
    if (email === '' || password === '') {
      dispatch(setError('Please fill in all fields'));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError('Please enter a valid email'));
      return false;
    }
    if (!validator.isLength(password, { min: 6, max: 30 })) {
      dispatch(setError('Password must be at least 6 characters'));
      return false;
    }
    dispatch(clearError());
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(setLoading());
      dispatch(loginAsync(email, password));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, []);

  return (
    <form
      className='mt-6 flex flex-col'
      action=''
      onSubmit={handleLogin}
      method='POST'
    >
      {
        error
        && (
          <div
            className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
            role='alert'
          >
            <span className='font-medium mr-2'>Error!</span>
            {error}
          </div>
        )

      }
      <div aria-label='email' className='mb-5 flex flex-col gap-2'>
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

      <div aria-label='password' className='mb-4 flex flex-col gap-2'>
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

      {
        !(title === 'Login') && (
          <div aria-label='is-institution' className='mb-4 flex flex-col gap-2'>
            <label htmlFor='isInstitution' className='flex items-center'>
              <input
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
        )
      }

      {
        isInstitution && (
          <div aria-label='institition data'>
            <div aria-label='institution-name' className='mb-5 flex flex-col gap-2'>
              <label htmlFor='name' className=''>
                <input
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
                  <select name='country' id='country' className='w-full h-9 text-sm' value={country} onChange={handleInputChange}>
                    <option value='peru'>Perú</option>
                    <option value='colombia'>Colombia</option>
                  </select>
                </label>
              </div>

              <div aria-label='phone' className='mb-4 flex flex-col gap-2 flex-1'>
                <label htmlFor='phone' className=''>
                  <input
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
        type='submit'
        className={`bg-blue-500  text-white font-bold py-2 px-6  whitespace-nowrap ${isLoading ? 'bg-gray-500' : 'hover:bg-blue-700'}`}
        disabled={isLoading}
      >
        {title}
      </button>

    </form>
  );
};

export default LoginOrSignupForm;

LoginOrSignupForm.propTypes = {
  title: PropTypes.string.isRequired,
};
