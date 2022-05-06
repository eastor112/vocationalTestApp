import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AcademicCapIcon, ClipboardListIcon, DesktopComputerIcon, LibraryIcon, PhotographIcon } from '@heroicons/react/solid';

const Tabs = ({ universityId }) => {
  return (
    <div aria-label='tabs' className='border-b border-gray-200 dark:border-gray-700'>

      <ul className='flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
        <li className='mr-2'>
          <NavLink
            to={`/dashboard/institution/${universityId}/principal`}
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <AcademicCapIcon className='mr-2 h-5 w-5' />
            Main
          </NavLink>
        </li>

        <li className='mr-2'>
          <NavLink
            to={`/dashboard/institution/${universityId}/media`}
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <PhotographIcon className='mr-2 h-5 w-5' />
            Media
          </NavLink>
        </li>

        <li className='mr-2'>
          <NavLink
            to={`/dashboard/institution/${universityId}/admision`}
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <LibraryIcon className='mr-2 h-5 w-5' />
            Admission
          </NavLink>
        </li>

        <li className='mr-2'>
          <NavLink
            to={`/dashboard/institution/${universityId}/social`}
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <DesktopComputerIcon className='mr-2 h-5 w-5' />
            Social media
          </NavLink>
        </li>

        <li className='mr-2'>
          <NavLink
            to={`/dashboard/institution/${universityId}/offers`}
            className={({ isActive }) => (`inline-flex p-4 rounded-t-lg border-b-2 group ${isActive ? ' border-blue-600 active text-blue-600' : 'border-transparent hover:text-gray-600 hover:border-gray-300'}`)}
          >
            <ClipboardListIcon className='mr-2 h-5 w-5' />
            Academic Offer
          </NavLink>
        </li>

      </ul>

    </div>
  );
};

Tabs.propTypes = {
  universityId: PropTypes.string.isRequired,
};

export default Tabs;
