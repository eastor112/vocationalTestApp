import React from 'react';
import GroupLinks from '../../molecules/groupLinks/GroupLinks';

function Footer() {
  return (
    <footer className="px-6 md:px-20 lg:px-24 pt-24 md:pt-28 lg:pt-32 bg-primary-1 text-light-1">

      <div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-6 gap-10">

        <div className="hidden lg:block lg:col-span-2">

          <div className="flex flex-col md:flex-row items-center">
            <svg
              className="w-14 h-14 mr-2 text-light-1"
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
            <a className="text-base font-medium whitespace-nowrap text-light-1" href=".">My Future, My Choice</a>
          </div>

        </div>

        <div>
          <h2 className="font-bold">
            Advertising
          </h2>

          <GroupLinks
            linksArray={[
              { link: './', text: 'Pricing', size: 'small' },
              { link: './', text: 'Subscriptions', size: 'small' },
              { link: './', text: 'Payment methods', size: 'small' },
            ]}
            underlineOnHover
            vertical
          />

        </div>

        <div>
          <h2 className="font-bold">
            Resources
          </h2>

          <GroupLinks
            linksArray={[
              { link: './', text: 'Personal counseling', size: 'small' },
              { link: './', text: 'Universities Ranking', size: 'small' },
              { link: './', text: 'Employment statistics', size: 'small' },
            ]}
            underlineOnHover
            vertical
          />
        </div>

        <div>
          <h2 className="font-bold">
            Contact Us
          </h2>

          <GroupLinks
            linksArray={[
              { link: './', text: 'PE+51-555555555', size: 'small' },
              { link: './', text: 'CO+57-999999999', size: 'small' },
              { link: './', text: 'YourFutureApp', size: 'small' },
            ]}
            underlineOnHover
            vertical
          />

        </div>

        <div className="md:block">
          <h2 className="font-bold">
            Address
          </h2>

          <GroupLinks
            linksArray={[
              { link: '', text: 'Kevin Brook,\n Imogeneborough,\n CA 58517', size: 'small' },
            ]}
            underlineOnHover
            vertical
          />
        </div>

      </div>

      <small className="block text-center pt-12 md:pt-16 lg:pt-20 pb-2 md:pb-4 lg:pb-6">
        Copyright
        {' '}
        <i className="fa fa-copyright" aria-hidden="true" />
        {' '}
        2022 -2030
      </small>
    </footer>
  );
}

export default Footer;
