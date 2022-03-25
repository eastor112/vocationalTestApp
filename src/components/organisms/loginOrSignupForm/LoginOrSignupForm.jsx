import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginGoogle } from '../../../actions/auth-actions';

const LoginOrSignupForm = ({ title }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const handleLoginOrSignup = () => {
    dispatch(loginGoogle());
  };

  useEffect(() => {
    if (auth.uid) {
      navigate('/test');
    }
  }, [auth.uid]);

  return (
    <form
      className='mt-6 flex flex-col'
      action=''
    >
      <div>
        {
          auth.uid
        }
        {
          auth.displayName
        }
      </div>
      <div className='mb-5 flex flex-col gap-2'>
        <label htmlFor='email' className=''>
          <input
            id='email'
            type='email'
            placeholder='Email'
            className='border-b hover:border-b-2 focus:border-b-2 border-primary-1 w-full py-1 outline-none'
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
          />
        </label>
      </div>

      <button
        type='button'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6  whitespace-nowrap'
        onClick={handleLoginOrSignup}
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
