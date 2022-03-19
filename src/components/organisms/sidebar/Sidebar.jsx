import { NavLink } from 'react-router-dom';
import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Sidebar({ setWidth }) {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    setWidth(expand ? 64 : 16);
  }, [setWidth, expand]);

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
            <NavLink to='.' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
              </svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Dashboard
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to='.' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' /></svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Kanban
              </span>
              {/* <span className="inline-flex justify-center items-center px-2 ml-3
              text-sm font-medium text-gray-800 bg-gray-200 rounded-full">Pro</span> */}
            </NavLink>
          </li>

          <li>
            <NavLink to='.' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z' />
                <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z' />
              </svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Inbox
              </span>
              {/* <span className="inline-flex justify-center items-center p-3 ml-3 w-3
              h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full">3</span> */}
            </NavLink>
          </li>

          <li>
            <NavLink to='.' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' /></svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Users
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to='.' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z' clipRule='evenodd' /></svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Products
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to='.' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z' clipRule='evenodd' /></svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Sign In
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to='.' className='flex items-center p-2 text-base font-normal text-light-1 rounded-lg  hover:bg-primary-2'>
              <svg className='flex-shrink-0 w-6 h-6 text-light-1 transition duration-75' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z' clipRule='evenodd' /></svg>
              <span className={expand ? 'flex-1 ml-3 whitespace-nowrap' : 'hidden'}>
                Sign Up
              </span>
            </NavLink>
          </li>
        </ul>

        <button type='button' className='w-full' onClick={handleExpand}>
          <div className='flex items-center justify-between p-2 text-base font-normal text-light-1'>
            <svg className={`h-6 w-6  ${expand && 'invisible'}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
            </svg>
            <svg className={`h-6 w-6 ${!expand && 'hidden'}`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
        </button>

      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  setWidth: PropTypes.func.isRequired,
};

export default Sidebar;
