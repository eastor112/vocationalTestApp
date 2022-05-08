import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { loginAsync } from '../../../context/actions/auth-actions';
import { setError, clearError, setLoading } from '../../../context/actions/ui-actions';
import { useForm } from '../../../hooks/useForm';
import { signUpStudentApi, signUpInstitutionApi } from '../../../services/authServices';

const LoginOrSignupForm = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector((state) => state.ui);

  const [isInstitution, setIsInstitution] = useState(false);

  const { formValues, handleInputChange } = useForm({
    email: '',
    password: '',
    name: '',
    country: 'PE',
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
    if (isInstitution && (name === '' || country === '' || phone === '' || url === '')) {
      setError('Please fill in all institutions fields');
      return false;
    }
    dispatch(clearError());
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(setLoading(true));

      if (title === 'Login') {
        dispatch(loginAsync(email, password));
      } else if (isInstitution) {
        signUpInstitutionApi(email, password, name, country, phone, url)
          .then((data) => {
            if (data.uid) {
              dispatch(setLoading(false));
              navigate('/signup/confirmation');
            }
            dispatch(setLoading(false));
          })
          .catch((err) => {
            dispatch(setLoading(false));
            dispatch(setError(err.message));
          });
      } else {
        signUpStudentApi(email, password)
          .then((data) => {
            if (data.uid) {
              dispatch(setLoading(false));
              navigate('/signup/confirmation');
            }
            dispatch(setLoading(false));
          }).catch(() => {
            dispatch(setLoading(false));
            dispatch(setError('Email already exists'));
          });
      }
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

      {
        !(title === 'Login') && (
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
        )
      }

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
        className={`bg-blue-500 relative text-white font-bold py-2 px-6  whitespace-nowrap rounded-sm ${isLoading ? 'bg-gray-500' : 'hover:bg-blue-700'}`}
        disabled={isLoading}
      >
        {
          isLoading
          && (
            <svg role='status' className='mr-2 w-5 h-5 text-purple-700 animate-spin dark:text-gray-100 fill-white absolute left-2 top-3' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
              <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
            </svg>
          )
        }

        {title}
      </button>

    </form>
  );
};

export default LoginOrSignupForm;

LoginOrSignupForm.propTypes = {
  title: PropTypes.string.isRequired,
};
