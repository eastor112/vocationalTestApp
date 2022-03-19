import React from 'react';
import { useNavigate } from 'react-router-dom';

const SimpleCard = () => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate('/university/1');
  };

  return (
    <div
      className='card md:w-1/2 lg:w-1/3 xl:w-1/4 border-8 border-white bg-slate-400 inline-block whitespace-normal'
    >
      <figure>
        <img src='https://via.placeholder.com/800x600?text=University-Photograph' alt='' />
      </figure>
      <div className='p-6'>
        <h3 className='text-lg font-bold uppercase'>
          University 1
        </h3>
        <p className='mt-4 text-base leading-3'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste cumque
          autem quos quisquam, atque bea...
        </p>

        <button
          type='button'
          className='mt-4 text-blue-500 hover:underline hover:text-blue-600'
          onClick={handleSeeMore}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default SimpleCard;
