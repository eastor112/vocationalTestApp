import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SimpleCard from '../simpleCard/SimpleCard';

const Carousel = ({ universities, setPage, totalPages }) => {
  const next = () => {
    setPage((c) => {
      if (c < totalPages) {
        return c + 1;
      }
      return c;
    });
  };

  const prev = () => {
    setPage((c) => {
      if (c > 1) {
        return c - 1;
      }
      return c;
    });
  };

  return (

    <div className='carousel z-0 my-8 relative flex items-center'>
      <button
        aria-label='previous'
        type='button'
        className='left-arrow bg-blue-300 opacity-60 hover:opacity-100 absolute text-purple-600 h-8 w-8 rounded-full flex items-center justify-center'
        onClick={prev}
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
        </svg>
      </button>

      <button
        aria-label='next'
        type='button'
        className='right-arrow absolute bg-blue-300 opacity-60 hover:opacity-100 right-0 text-purple-600 h-8 w-8 rounded-full flex items-center justify-center'
        onClick={next}
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </button>

      <div className='card-container mx-10 overflow-hidden whitespace-nowrap overflow-x-auto'>

        {
          universities.map((university) => (
            <SimpleCard
              key={uuidv4()}
              id={university.id}
              name={university.name}
              logo={university.logo}
              mission={university.mission}
              campus={university.campus}
            />
          ))
        }

      </div>

    </div>
  );
};

Carousel.defaultProps = {
  setPage: () => { },
  totalPages: 1,
};

Carousel.propTypes = {
  universities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    logo: PropTypes.string,
    mission: PropTypes.string,
    campus: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  setPage: PropTypes.func,
  totalPages: PropTypes.number,
};

export default Carousel;
