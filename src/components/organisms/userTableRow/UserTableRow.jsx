import PropTypes from 'prop-types';
import { PencilAltIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { capitalize, showName } from '../../../helpers/stringHelpers';
import { destroyUserAction, setActiveUserAction, setIsEditingUsersAction } from '../../../context/actions/usersActions';

const UserTableRow = ({ user, openModal, setIsCreating, usersByPage, page }) => {
  const dispatch = useDispatch();

  const handleUpdateUser = () => {
    dispatch(setIsEditingUsersAction(true));
    dispatch(setActiveUserAction(user));
    setIsCreating(false);
    openModal();
  };

  const handleDeleteUser = () => {
    dispatch(destroyUserAction(user.uid, usersByPage, page));
  };
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-purple-100 dark:hover:bg-gray-600 h-12'>
      <td className='w-4 px-4'>
        <div className='flex items-center'>
          <input id='checkbox-table-search-1' type='checkbox' className='w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
          <label htmlFor='checkbox-table-search-1' className='sr-only'>checkbox</label>
        </div>
      </td>

      <td className='hidden md:flex md:justify-center md:items-center md:h-12'>
        <figure className='rounded-full w-8'>
          <img src={user.profile !== '' ? user.profile : require('../../../assets/avatar-male.png')} alt='avatar-png' />
        </figure>
      </td>

      <th scope='row' className='px-4 font-medium text-gray-900 dark:text-white whitespace-nowrap hidden lg:table-cell'>
        {showName(user.names, user.fatherName, user.motherName)}
      </th>

      <td className='px-4'>
        {user.email}
      </td>

      <td className='px-4 hidden sm:table-cell'>
        {user.premium === 'INACTIVE' ? 'Free' : 'Premium'}
      </td>
      <td className='px-4 hidden sm:table-cell'>
        {capitalize(user.role)}
      </td>
      <td className='px-4 hidden md:table-cell'>
        {user.phone}
      </td>

      <td className='px-2 text-right whitespace-nowrap'>
        <button
          type='button'
          className='mx-1 text-yellow-500'
          onClick={handleUpdateUser}
        >
          <PencilAltIcon className='w-5 h-5' />
        </button>

        <button
          type='button'
          className='mx-1'
          onClick={handleDeleteUser}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-danger-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
        </button>
      </td>
    </tr>
  );
};

UserTableRow.defaultProps = {
  openModal: () => { },
};

UserTableRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  openModal: PropTypes.func,
  setIsCreating: PropTypes.func.isRequired,
  usersByPage: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default UserTableRow;
