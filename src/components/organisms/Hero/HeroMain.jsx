/* eslint-disable global-require */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroMain() {
  const navigate = useNavigate();

  const handleTest = () => {
    navigate('/signup');
  };

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <section className='hero flex flex-col-reverse md:flex-row md:items-center mt-6 md:mt-12 lg:mt-28 xl:mr-10'>

      <div className='left flex flex-col w-full md:w-1/2 lg:mr-8'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl leading-5 xl:leading-8 font-semibold mt-6 md:mt-0'>
          Discover your vocation, choose well
        </h2>
        <p className='text-xl md:text-lg xl:text-xl leading-4 md:leading-4 xl:leading-5 mt-10 md:mt-5 lg:mt-10'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur ipsa inventore libero dolorem vel ipsam fuga necessitatibus
          non natus quo. Sed, est quia ad necessitatibus aperiam culpa autem eum quasi.
        </p>
        <div className='buttons mt-14 md:mt-7 lg:mt-12'>
          <button
            type='button'
            className='border w-52 md:w-36 lg:w-48 mr-2 md:mr-1 mb-2 bg-primary-2 hover:bg-primary-1 text-light-1 text-lg md:text-sm lg:text-base font-medium px-3 py-3 rounded-md'
            onClick={handleTest}
          >
            Vocational test
          </button>
          <button
            type='button'
            className='border w-52 md:w-36 lg:w-48  md:mr-1 mb-2 border-primary-1 bg-light-2 hover:bg-light-1 text-primary-1 text-lg md:text-sm lg:text-base font-medium px-3 py-3 rounded-md'
            onClick={handleSearch}
          >
            Where to study
          </button>
        </div>
      </div>

      <div className='right flex h-auto md:h-96 xl:h-auto md:w-1/2 '>

        <img className='w-full' src={require('../../../assets/girl-choosing.jpg')} alt='' />

      </div>

    </section>
  );
}

export default HeroMain;
