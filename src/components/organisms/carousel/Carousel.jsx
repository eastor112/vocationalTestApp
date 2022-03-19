import React from 'react';
import SimpleCard from '../simpleCard/SimpleCard';

const Carousel = () => (
  <div className='carousel z-0 mt-6 relative'>
    <button type='button' className='left-arrow bg-blue-400 opacity-10 hover:opacity-60 absolute h-full'>
      back
    </button>
    <button type='button' className='right-arrow absolute bg-blue-400 opacity-10 hover:opacity-60 right-0 h-full'>
      next
    </button>

    <div className='card-container mx-9 overflow-hidden whitespace-nowrap'>

      <SimpleCard />
      <SimpleCard />
      <SimpleCard />
      <SimpleCard />

    </div>

  </div>
);

export default Carousel;
