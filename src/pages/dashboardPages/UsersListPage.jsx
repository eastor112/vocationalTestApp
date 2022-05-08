import { Button, Label, Select } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CreateUserForm from '../../components/organisms/createUserform/CreateUserForm';
import ModalComponent from '../../components/organisms/modal/ModalComponent';
import UserDetailUpdateCreateForm from '../../components/organisms/userForm/UserDetailUpdateCreateForm';
import UserTableRow from '../../components/organisms/userTableRow/UserTableRow';
import {
  searchUsersAction,
  setAllUsersAction,
  setCountriesAction,
  setIsEditingUsersAction,
  setPageUsersAction,
} from '../../context/actions/usersActions';
import { useForm } from '../../hooks/useForm';
import { useModal } from '../../hooks/useModal';

const UsersListPage = () => {
  const width = useOutletContext();

  const dispatch = useDispatch();
  const { users, page, totalPages, totalUsers, isEditing } = useSelector((state) => state.users);

  const { isOpen, openModal, closeModal } = useModal(false);
  const [isCreating, setIsCreating] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const { formValues, handleFormChange } = useForm({
    usersByPage: '8',
    search: '',
  });

  useEffect(() => {
    if (users.length === 0) {
      setFirstLoad(false);
      dispatch(setAllUsersAction(formValues.usersByPage, page));
      dispatch(setCountriesAction());
    } else {
      setFirstLoad(false);
    }
  }, []);

  useEffect(() => {
    if (formValues.search === '') {
      if (!firstLoad) {
        dispatch(setAllUsersAction(formValues.usersByPage, page));
      }
    } else {
      dispatch(searchUsersAction(formValues.search, formValues.usersByPage, page));
    }
  }, [formValues.usersByPage, page]);

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(setPageUsersAction(page + 1));
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      dispatch(setPageUsersAction(page - 1));
    }
  };

  const handleOpenCreateModal = () => {
    dispatch(setIsEditingUsersAction(true));
    setIsCreating(true);
    openModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.search.length > 0) {
      dispatch(searchUsersAction(formValues.search));
    } else {
      dispatch(setAllUsersAction(formValues.usersByPage, page));
    }
  };

  useEffect(() => {
    if (!isEditing) {
      closeModal();
    }
  }, [isEditing]);

  return (
    <main className={`min-h-screen pt-4 pr-6 pb-10 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <div className='flex flex-row-reverse justify-between items-center mb-6 mt-2'>

        <form aria-label='search-input' className='flex gap-1' onSubmit={handleSubmit}>
          <label htmlFor='table-search' className='sr-only'>Search</label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
            </div>
            <input
              type='search'
              id='table-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search by name, email, phone, etc...'
              name='search'
              value={formValues.search}
              onChange={handleFormChange}
            />
          </div>
          <Button
            type='submit'
          >
            Search
          </Button>
        </form>

        <div aria-label='number-selector' className='flex items-center gap-2'>
          <Label
            className='block'
            htmlFor='countries'
          >
            Users by page:
          </Label>
          <Select
            id='number-selector'
            className='pl-3 pr-7 '
            name='usersByPage'
            value={formValues.usersByPage}
            onChange={handleFormChange}
          >
            <option className='px-3' value='4'>
              4
            </option>
            <option className='px-3' value='8'>
              8
            </option>
            <option className='px-3' value='12'>
              12
            </option>
            <option className='px-3' value='16'>
              16
            </option>
            <option className='px-3' value='20'>
              20
            </option>
          </Select>
        </div>
      </div>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg md:mr-2 mb-6'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-4'>
                <div className='flex items-center'>
                  <input id='checkbox-all-search' type='checkbox' className='w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                  <label htmlFor='checkbox-all-search' className='sr-only'>checkbox</label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3 hidden md:table-cell'>
                <span className='sr-only'>Edit</span>
              </th>
              <th scope='col' className='px-4 py-3 hidden lg:table-cell'>
                User
              </th>
              <th scope='col' className='px-4 py-3'>
                Email
              </th>
              <th scope='col' className='px-4 py-3 hidden sm:table-cell'>
                Type
              </th>
              <th scope='col' className='px-4 py-3 hidden sm:table-cell'>
                Role
              </th>
              <th scope='col' className='px-4 py-3 hidden md:table-cell'>
                Phone
              </th>
              <th scope='col' className='px-4 py-3'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <UserTableRow
                  key={uuidv4()}
                  user={user}
                  openModal={openModal}
                  setIsCreating={setIsCreating}
                  usersByPage={formValues.usersByPage}
                  page={page}
                />
              ))
            }

          </tbody>
        </table>
      </div>

      {
        (users.length > 0 || (users.length === 0 && page > 0))
        && (
          <div aria-label='pagination' className='flex flex-col items-center'>

            <span className='text-sm text-gray-700 dark:text-gray-400'>
              Showing
              <span className='font-semibold text-gray-900 dark:text-white mx-1'>{formValues.usersByPage * (page - 1) + 1}</span>
              to
              <span className='font-semibold text-gray-900 dark:text-white mx-1'>
                {
                  (formValues.usersByPage * page) < totalUsers
                    ? (formValues.usersByPage * page) : totalUsers
                }
              </span>
              of
              <span className='font-semibold text-gray-900 dark:text-white mx-1'>{totalUsers}</span>
              Careers
            </span>

            <div className='inline-flex mt-2 xs:mt-0'>
              <button
                type='button'
                className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                onClick={handlePrevious}
              >
                Prev
              </button>
              <button
                type='button'
                className='py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )
      }

      <button
        type='button'
        className='h-11 w-11  rounded-full bottom-5 right-5 text-white bg-purple-500 flex justify-center items-center shadow-md shadow-gray-500 hover:bg-purple-600 fixed'
        onClick={handleOpenCreateModal}
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
        </svg>
      </button>

      <ModalComponent
        isOpen={isOpen}
        closeModal={closeModal}
      >
        {
          isCreating
            ? <CreateUserForm usersByPage={formValues.usersByPage} page={page} />
            : <UserDetailUpdateCreateForm />
        }
      </ModalComponent>

    </main>
  );
};

export default UsersListPage;
