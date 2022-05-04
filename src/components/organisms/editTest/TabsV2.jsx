import React from 'react';
import { NavLink } from 'react-router-dom';

const TabsV2 = () => {
  return (
    <div aria-label='tabs' className='border-b border-gray-200 dark:border-gray-700'>

      <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        <li className='mr-2'>
          <NavLink
            to='/dashboard/admin/principal'
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <svg className='mr-2 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z' clipRule='evenodd' /></svg>
            Principal
          </NavLink>
        </li>

        <li className='mr-2'>
          <NavLink
            to='/dashboard/admin/questions'
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <svg className='mr-2 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' /></svg>
            Questions
          </NavLink>
        </li>

        <li className='mr-2'>
          <NavLink
            to='/dashboard/admin/results'
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <svg className='mr-2 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' /></svg>
            Results
          </NavLink>
        </li>

      </ul>

    </div>
  );
};

export default TabsV2;
