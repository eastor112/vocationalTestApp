import { NavLink } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { logoutSimple } from '../../../actions/auth-actions';

const Sidebar = ({ setWidth }) => {
  const [expand, setExpand] = useState(false);

  const dispatch = useDispatch();

  const handleExpand = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    setWidth(expand ? 64 : 16);
  }, [setWidth, expand]);

  const logout = () => {
    dispatch(logoutSimple());
  };

  return (
    <aside className={`fixed  transition duration-1000 ${expand ? 'w-64' : 'w-16'}`} aria-label='Sidebar'>
      <div className='overflow-hidden py-4 px-3 h-screen bg-primary-1 flex flex-col justify-between'>

        <ul className='space-y-2'>

          <li>
            <NavLink to='/' className='border-b-2 border-l-2 border-teal-300  flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2 mb-8'>
              <svg
                className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75 '
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
              <span className={expand ? 'self-center font-semibold whitespace-nowrap text-light-1 dark:text-white ml-3 ' : 'hidden'}>My Future, My Choice</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
              </svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                General
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/dashboard/institution/profile' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
              </svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Institution Profile
              </span>

            </NavLink>
          </li>

          <li>
            <NavLink to='/dashboard/user/profile' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
              </svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                User profile
              </span>

            </NavLink>
          </li>

          <li>
            <NavLink to='/dashboard/users' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
              </svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Users
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/dashboard/careers' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path d='M12 14l9-5-9-5-9 5 9 5z' />
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222' />
              </svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Careers
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to='/dashboard/tests' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' />
              </svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Vocational Tests
              </span>
            </NavLink>
          </li>
          <GoogleLogout
            clientId='658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
            buttonText='Logout'
            render={(renderProps) => (
              <li>
                <NavLink to='/'>
                  <button
                    data-testid='logout-button'
                    type='button'
                    className='text-light-1 flex justify-start items-center p-2 text-base font-normal hover:bg-primary-2 rounded-lg w-full'
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                    </svg>
                    <span className={expand ? 'ml-3 whitespace-nowrap' : 'hidden'}>
                      Logout
                    </span>
                  </button>
                </NavLink>
              </li>
            )}
            onLogoutSuccess={logout}
          />

        </ul>

        <button data-testid='expand-button' type='button' className='w-full' onClick={handleExpand}>
          <div className='flex items-center justify-between p-2 text-base font-normal text-light-1'>
            <svg xmlns='http://www.w3.org/2000/svg' className={`h-6 w-6  ${expand && 'invisible'}`} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M13 5l7 7-7 7M5 5l7 7-7 7' />
            </svg>

            <svg xmlns='http://www.w3.org/2000/svg' className={`h-6 w-6 ${!expand && 'hidden'}`} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M11 19l-7-7 7-7m8 14l-7-7 7-7' />
            </svg>
          </div>
        </button>

      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  setWidth: PropTypes.func.isRequired,
};

export default Sidebar;
