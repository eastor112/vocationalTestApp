import React from 'react';
import Footer from '../../components/organisms/footer/Footer';

const AboutPage = () => (
  <div>
    <div className='h-3 flex md:h-96  absolute -z-10'>
      <img src={require('../../assets/shapes.png')} alt='' />
    </div>
    <h3 className='pt-20 pl-20 font-semibold text-5xl p-2 flex justify-center'>Let us help built your future!</h3>
    <div className='flex flex-col justify-center items-center p-2 gap-16 md:flex-row'>
      <div className='flex flex-col gap-5'>
        <span className='block p-6 max-w-xs md:max-w-sm bg-purple-900 rounded-lg border border-indigo-200 shadow-md hover:bg-teal-400 dark:bg-indigo-800'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>Mission</h5>
          <p className='font-normal text-white  text-justify'>We are a group of developers willing to help you choose the best fit for you!, no worries, everyone hesitate when choosing a profession, it was not easy for us either, res assured this will make everything go with ease.</p>
        </span>
        <span className='block p-6 max-w-xs md:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-teal-400'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Vision</h5>
          <p className='font-normal text-gray-700 dark:text-gray-400 text-justify'>Our mission is to help as much people as we can providing a useful guide which can lead them to the profession of their dreams by improving our services adjusting them to your needs.</p>
        </span>
      </div>
      <div className='flex h-auto md:h-96 xl:h-auto md:w-1/2 pt-8'>
        <img src={require('../../assets/about.png')} className='w-full' alt='team work' />
      </div>
    </div>
    <div className='flex justify-end h-60'>
      <img src={require('../../assets/shape-2.png')} alt='' />
    </div>
    <Footer />
  </div>
);

export default AboutPage;
