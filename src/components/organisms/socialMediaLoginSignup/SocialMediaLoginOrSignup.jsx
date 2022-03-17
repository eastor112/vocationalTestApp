import React from 'react';
import PropTypes from 'prop-types';

function SocialMediaLoginOrSignup({ login }) {
  return (
    <div className="flex flex-col gap-2 mt-10 mb-20">

      <div className="flex justify-between items-center w-full">
        <hr className="w-1/4  border-primary-1" />
        <p className="text-center text-primary-1 px-3">
          or
          {login ? 'login' : 'sign up'}
          {' '}
          with:
        </p>
        <hr className="w-1/4  border-primary-1" />
      </div>

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-5 whitespace-nowrap"
      >
        <i className="fa fa-google mr-2" aria-hidden="true" />
        {
          login ? 'Login with Google' : 'Sign up with Google'
        }
      </button>
    </div>
  );
}

export default SocialMediaLoginOrSignup;

SocialMediaLoginOrSignup.propTypes = {
  login: PropTypes.bool.isRequired,
};
