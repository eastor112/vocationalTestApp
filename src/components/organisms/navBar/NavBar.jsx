import React from 'react';
import Button from '../../atoms/button/Button';
import GroupLinks from '../../molecules/groupLinks/GroupLinks';

function NavBar() {
  return (
    <nav
      id="navbar"
      className="fixed z-10 w-full h-20 md:h-20 px-6 md:px-20 lg:px-24 flex flex-col md:flex-row md:justify-between shrink-0 md:items-center  bg-primary-1"
    >

      <div className="flex items-center justify-between h-20">

        <div className="flex items-center">
          <svg
            className="w-10 h-10 mr-2 text-light-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <a className="text-xl font-medium whitespace-nowrap text-light-1" href=".">My Future, My Choice</a>
        </div>

        <button
          type="button"
          id="boton"
          className="flex items-center md:hidden px-3 py-2 border rounded text-light-1 border-light-1 hover:text-secondary hover:border-secondary"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

      </div>

      <div
        id="right"
        className="hidden md:flex flex-col md:flex-row  items-start md:items-center flex-nowrap  md:visible h-20"
      >

        <GroupLinks
          linksArray={[
            { link: '/', text: 'Home', size: 'medium' },
            { link: '/about', text: 'Pricing', size: 'medium' },
            { link: '/contact', text: 'About Us', size: 'medium' },
          ]}
          underlineOnHover
        />

        <Button text="Sign Up" type="neutral" size="medium" />

      </div>

    </nav>
  );
}

export default NavBar;
