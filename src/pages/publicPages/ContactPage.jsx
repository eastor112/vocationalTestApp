import React from 'react';
import Footer from '../../components/organisms/footer/Footer';

const ContactPage = () => (
  <div>
    <h3
      data-cy='contact-page-title'
      className='pt-20 pl-20 text-4xl font-semibold text-center mb-7'
    >
      Any questions or remarks? Just write us a message!
    </h3>

    <div className='flex flex-col md:flex-row'>
      <div className='left flex h-auto md:h-96 xl:h-auto md:w-1/2'>
        <img src={require('../../assets/contact.png')} alt='contact' />
      </div>
      <div className='right flex flex-col w-full  mb-12 gap-10 md:w-1/2 lg:mr-8 p-6 max-w-sm bg-gradient-to-r from-indigo-800 to-teal-500 rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
        <h5
          data-cy='contact-page-info'
          className='mb-2 text-2xl font-bold tracking-tight text-white dark:text-white'
        >
          Contact information
        </h5>

        <p className='font-normal text-white '>you can contact us via social media or email, our team will get back to you in 24h tops.</p>
        <div className='flex flex-col gap-10 pt-10'>
          <div className='flex flex-row gap-3'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7 text-white' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
            </svg>
            <p className='text-white'>PE+51-555555555  CO+57-999999999</p>
          </div>
          <div className='flex flex-row gap-3'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
            </svg>
            <p className='text-white'>yourfuture@app.com</p>
          </div>
          <div className='flex flex-row gap-3'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
            </svg>
            <p className='text-white'>PE 102 street   COL 102 street</p>
          </div>
        </div>
        <div className='flex flex-row gap-2 pt-16'>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
            <button
              type='button'
              className=' rounded-full w-12 h-12 text-white  hover:bg-blue-600 flex justify-center items-center '
            >
              <i className='fa-brands fa-facebook-f' />

            </button>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <button type='button' className='rounded-full w-12 h-12 text-white hover:bg-gradient-to-bl  hover:from-pink-500 hover:to-yellow-500 flex justify-center items-center '>
              <i className='fa-brands fa-instagram' />
            </button>
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
            <button type='button' className='rounded-full w-12 h-12 text-white hover:bg-blue-400 flex justify-center items-center'>
              <i className='fa-brands fa-twitter' />
            </button>
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ContactPage;
