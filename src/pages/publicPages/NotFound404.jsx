/* eslint-disable global-require */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/button/Button';

const NotFound404 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <section className='bg-slate-100 w-screen h-screen'>
      <div className='h-full flex flex-col items-center justify-center gap-20'>

        <figure className=' w-3/4 flex justify-center'>
          <img src={require('../../assets/404.png')} alt='' />
        </figure>

        <div className='place-content-center md: w-full'>
          <h2 className='text-2xl font-bold text-center md:text-4xl'>Page not found.</h2>
          <br />
          <p className=' text-gray-500 text-center'>The page you are looking for might have been removed.</p>
          <div className='w-full flex justify-center pt-20'>
            <Button text='Return to home' size='large' action={handleClick} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default NotFound404;
