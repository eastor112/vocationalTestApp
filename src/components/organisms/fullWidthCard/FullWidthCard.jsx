import React from 'react';

function FullWidthCard() {
  return (
    <section className='summary mt-6 bg-secondary-1 md:flex md:items-center relative md:h-80'>

      <div className='md:flex md:w-1/2 md:h-80 h-full overflow-hidden'>
        <img
          className='object-cover w-full object-center'
          // eslint-disable-next-line global-require
          src={require('../../../assets/lawer-career.jpg')}
          alt=''
        />
      </div>

      <div className='md:h-80  md:flex md:flex-col justify-between md:w-1/2 px-4 py-3 md:px-5 lg:px-7 xl:px-8'>
        <div>
          <h2 className='text-3xl md:text-3xl lg:text-4xl text-light-2 font-semibold xl:mt-4'>Lawer</h2>
          <hr className='mt-1' />
        </div>

        {/* https://www.computrabajo.com.co/salarios/ingeniero-mecatronico */}
        <ul className='my-4'>
          <li className='list-disc ml-4 mb-3 text-sm lg:text-base xl:text-lg '>
            <span className='font-bold text-base lg:text-lg'>Employment field:</span>
            {' '}
            Activities of representation, forensic practice, judge.
          </li>
          <li className='list-disc ml-4 mb-3 text-sm lg:text-base xl:text-lg '>
            <span className='font-bold text-base lg:text-lg'>Average monthly salary:</span>
            {' '}
            550.5 USD
          </li>
          <li className='list-disc ml-4 mb-3 text-sm lg:text-base xl:text-lg '>
            <span className='font-bold text-base lg:text-lg'>Principal required skill:</span>
            {' '}
            Capacity for analysis and interpretation. Ethical vocation and commitment to justice.
          </li>
        </ul>
      </div>

    </section>
  );
}

export default FullWidthCard;
