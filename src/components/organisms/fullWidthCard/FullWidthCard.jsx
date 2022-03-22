import React from 'react';
import PropTypes from 'prop-types';

const FullWidthCard = ({ name, skills, field, photo }) => {
  return (
    <section className='summary mt-6 bg-secondary-1 md:flex md:items-center relative md:h-80'>

      <div className='md:flex md:w-1/2 md:h-80 h-full overflow-hidden'>
        <img
          className='object-cover w-full object-center'
          src={photo}
          alt=''
        />
      </div>

      <div className='md:h-80  md:flex md:flex-col justify-between md:w-1/2 px-4 py-3 md:px-5 lg:px-7 xl:px-8'>
        <div>
          <h2 className='text-3xl md:text-3xl lg:text-4xl text-light-2 font-semibold xl:mt-4'>{name}</h2>
          <hr className='mt-1' />
        </div>

        <ul className='my-4'>
          <li className='list-disc ml-4 mb-3 text-sm lg:text-base xl:text-lg '>
            <span className='font-bold text-base lg:text-lg mr-1'>Employment field:</span>
            {`${field[0]} ${field[1]} ${field[2]}`}
          </li>
          <li className='list-disc ml-4 mb-3 text-sm lg:text-base xl:text-lg '>
            <span className='font-bold text-base lg:text-lg mr-1'>Principal required skills:</span>

            {`${skills[0]}, ${skills[1]}, ${skills[2]}.`}
          </li>
        </ul>
      </div>

    </section>
  );
};

FullWidthCard.propTypes = {
  name: PropTypes.string.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  photo: PropTypes.string.isRequired,
};

export default FullWidthCard;
