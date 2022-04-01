import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginSimple } from '../../../actions/auth-actions';
import { googleLoginValidationApi } from '../../../services/authServices';

const SocialMediaLoginOrSignup = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleFailure = () => {
    setError(true);
  };

  const handleLogin = async (credential) => {
    setError(false);
    const data = googleLoginValidationApi(credential);

    dispatch(loginSimple(data));
  };

  return (
    <div className='flex flex-col gap-2 mt-10 mb-20'>

      <div className='flex justify-between items-center w-full'>
        <hr className='w-1/4  border-primary-1' />
        <p className='text-center text-primary-1 px-3'>
          or login with:
        </p>
        <hr className='w-1/4  border-primary-1' />
      </div>
      {
        error && (
          <div className='p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800' role='alert'>
            <span className='font-medium'>Error!</span>
            Try again. If the error persists contact an administrator
          </div>
        )

      }

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <button
            type='button'
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-2 whitespace-nowrap'
          >
            <i className='fa fa-google mr-2' aria-hidden='true' />
            login with Google
          </button>
        )}
        buttonText='Login'
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy='single_host_origin'
      />
    </div>
  );
};

export default SocialMediaLoginOrSignup;
