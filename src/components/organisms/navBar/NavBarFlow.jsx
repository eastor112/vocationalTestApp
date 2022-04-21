import React, {
  useState, useRef, useLayoutEffect, useEffect,
} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBarFlow = () => {
  const navigate = useNavigate();
  const userMenuButton = useRef();

  const [drop, setDrop] = useState(false);
  const [pos, setPos] = useState(0);
  const [style, setStyle] = useState({});
  const [showMenu, setShowMenu] = useState(false);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  useEffect(() => {
    const handleResize = () => {
      setDrop(false);
    };

    const handleOutsideClick = (e) => {
      if (!userMenuButton.current?.contains(e.target)) {
        setDrop(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleDropClick = () => {
    setPos(userMenuButton.current.getBoundingClientRect().x);
    setStyle({
      position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: `translate3d(${pos > 124 ? pos - 124 : 0}px, 60px, 0px)`,
    });
    setDrop(!drop);
  };

  useLayoutEffect(() => {
    setPos(userMenuButton.current.getBoundingClientRect().x);
    setStyle({
      position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: `translate3d(${pos > 124 ? pos - 124 : 0}px, 60px, 0px)`,
    });
  }, [pos]);

  const handleTogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='fixed z-10 w-full bg-primary-1 border-gray-200 px-6 md:px-20 py-2.5 dark:bg-gray-800'>

      <div className='container flex flex-wrap justify-between items-center mx-auto'>

        <NavLink to='/' className='flex items-center'>

          <svg
            className='w-10 h-10 mr-2 text-light-1'
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

          <span className='self-center hidden sm:block text-xl font-semibold whitespace-nowrap text-light-1 dark:text-white'>My Future, My Choice</span>
        </NavLink>

        <div className='flex md:order-2 items-center'>

          <button
            ref={userMenuButton}
            onClick={handleDropClick}
            type='button'
            className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300'
          >
            <span className='sr-only'>Open user menu</span>
            <img className='w-8 h-8 rounded-full' src='https://via.placeholder.com/100?text=user' alt='userphoto' />
          </button>

          {/* Modal User Menu */}
          <div
            data-testid='user-menu'
            className={`z-50 my-8 text-base list-none bg-primary-1  divide-y divide-gray-100 shadow ${drop ? 'block' : 'hidden'}`}
            style={style}
            id='dropdown'
          >
            <div className='py-5 px-4'>
              <span className='block text-sm text-light-2'>User Name</span>
              <span className='block text-sm font-normal text-terciary-2 truncat'>name@flowbite.com</span>
            </div>

            <ul className='py-1' aria-labelledby='dropdown'>
              <li>
                <NavLink to='/dashboard' className='block py-2 px-4 text-sm text-light-1 hover:bg-primary-2'>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/user/profile' className='block py-2 px-4 text-sm text-light-1 hover:bg-primary-2'>Profile</NavLink>
              </li>

              <li>
                <NavLink to='/' className='block py-2 px-4 text-sm text-light-1 hover:bg-primary-2'>Sign out</NavLink>
              </li>
            </ul>
          </div>

          <button
            type='button'
            className='ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700'
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>

          <button
            onClick={handleTogleMenu}
            type='button'
            className='inline-flex items-center p-2 text-sm text-light-1 rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-4'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
            <svg className='hidden w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
          </button>

        </div>

        <div data-testid='main-menu' className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${showMenu ? '' : 'hidden'}`} id='mobile-menu-4'>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-normal'>
            <li>
              <NavLink onClick={() => setShowMenu(!showMenu)} to='/' className='block py-2 pr-4 pl-3 text-light-1 bg-primary-2 rounded md:bg-transparent md:hover:font-semibold md:p-0' aria-current='page'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowMenu(!showMenu)} to='about' className='block py-2 pr-4 pl-3 text-light-1 border-b  border-gray-100 hover:bg-primary-2 md:hover:bg-transparent md:border-0 md:hover:text-light-2 md:hover:font-semibold md:p-0'>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowMenu(!showMenu)} to='contact' className='block py-2 pr-4 pl-3 text-light-1 border-b  border-gray-100 hover:bg-primary-2 md:hover:bg-transparent md:border-0 md:hover:text-light-2 md:hover:font-semibold md:p-0'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBarFlow;
