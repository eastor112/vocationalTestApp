import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BriefcaseIcon, ClipboardListIcon, AcademicCapIcon } from '@heroicons/react/solid';

const TabsV3 = ({ careerId }) => {
  return (
    <div aria-label='tabs' className='border-b border-gray-200 dark:border-gray-700'>

      <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        <li className='mr-2'>
          <NavLink
            to={`/dashboard/careers/${careerId}/main`}
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <AcademicCapIcon className='mr-2 h-5 w-5' />
            Main
          </NavLink>
        </li>

        <li className='mr-2'>
          <NavLink
            to={`/dashboard/careers/${careerId}/field`}
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <BriefcaseIcon className='mr-2 h-5 w-5' />
            Field
          </NavLink>
        </li>

        <li className='mr-2'>
          <NavLink
            to={`/dashboard/careers/${careerId}/skills`}
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <ClipboardListIcon className='mr-2 h-5 w-5' />
            Skills
          </NavLink>
        </li>

      </ul>

    </div>
  );
};

TabsV3.propTypes = {
  careerId: PropTypes.string.isRequired,
};

export default TabsV3;
