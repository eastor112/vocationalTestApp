import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { loginAsync } from '../../../actions/auth-actions';
import { setError, clearError, setLoading } from '../../../actions/ui-actions';
import { useForm } from '../../../hooks/useForm';

const LoginOrSignupForm = ({ title }) => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state.ui);

  const { formValues, handleInputChange } = useForm({
    email: '',
    password: '',
  });

  [1, 2, 3].map((elem) => {
    return elem * 2;
  });

  const { email, password } = formValues;

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
          <div className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800' role='alert'>
            <span className='font-medium mr-2'>Error!</span>
            {error}
          </div>
        )

      }

      <div className='mb-5 flex flex-col gap-2'>
        <label htmlFor='email' className=''>
          <input
            id='email'
            type='email'
            placeholder='Email'
            className='border-b hover:border-b-2 focus:border-b-2 border-primary-1 w-full py-1 outline-none'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className='mb-8 flex flex-col gap-2'>
        <label htmlFor='pass' className=''>
          <input
            id='pass'
            type='password'
            placeholder='Password'
            className='border-b hover:border-b-2 focus:border-b-2 border-primary-1  w-full py-1 outline-none'
            name='password'
            value={password}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <button
        type='submit'
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6  whitespace-nowrap ${isLoading && 'bg-gray-500'}`}
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
