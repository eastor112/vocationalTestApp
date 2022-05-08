import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SimpleCard = ({
  id,
  name,
  logo,
  mission,
  campus,
}) => {
  return (
    <div
      className='mx-3 relative card sm:w-3/5 md:w-2/4 lg:w-1/3 xl:w-1/4  border-white bg-slate-400 inline-block whitespace-normal'
    >
      <figure className='h-24 overflow-hidden flex justify-center items-center'>
        <img className='w-full' src={campus[0]} alt={name} />
      </figure>
      <div className='p-5'>
        <figure className='absolute h-8 overflow-hidden top-1 left-1 p-1 bg-white'>
          <img className='h-full' src={logo} alt={id} />
        </figure>
        <h3 className='text-xs font-bold uppercase h-9'>
          {name}
        </h3>
        <p className='mt-1 text-sm leading-3'>
          {mission.substring(0, 100)}
          ...
        </p>

        <Link
          to={`/university/${id}`}
          className='university-detail-link mt-3 text-blue-600 hover:underline hover:text-blue-700 block'
        >
          See More
        </Link>
      </div>
    </div>
  );
};

SimpleCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  campus: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SimpleCard;
