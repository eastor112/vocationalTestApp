import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/organisms/carousel/Carousel';
import Footer from '../../components/organisms/footer/Footer';
import FullWidthCard from '../../components/organisms/fullWidthCard/FullWidthCard';
import careersData from '../../data/careers';
import { getCareerById } from '../../services/careersServices';

const CareerInformationPage = () => {
  const { id } = useParams();
  const [career, setCareer] = useState({});

  useEffect(() => {
    getCareerById(id)
      .then((data) => {
        if (data === 'error') {
          setCareer(careersData.find((car) => car.id === id));
        } else {
          setCareer(data);
          console.log(data);
        }
      });
  }, [id]);

  return (
    <>
      <main className='px-6 md:px-20 lg:px-24 pb-3 pt-20'>
        {
          career.id
          && (
            <>

              <FullWidthCard
                name={career.name}
                field={career.field.list}
                skills={career.skills.list}
                photo={career.photo}
              />

              <section className='profiles flex flex-col md:flex-row pt-5 md:pt-8 lg:pt-10'>
                <div className='entrants md:pr-8 lg:pr-10 flex-1'>
                  <h3 className='font-semibold text-lg md:text-base lg:text-lg mb-2'>
                    This is a brief description of this profession
                  </h3>
                  <p>
                    {career.description}
                  </p>
                </div>

                <div className='graduates md:pr-8 lg:pr-10 flex-1'>
                  <h3 className='font-semibold text-sm md:text-base lg:text-lg mb-2'>
                    These are the priority skills if you want to study this profession
                  </h3>
                  <p>
                    {career.skills.list.join(', ')}
                    .
                  </p>
                </div>

                <div className='graduates md:pr-8 lg:pr-10 flex-1'>
                  <h3 className='font-semibold text-sm md:text-base lg:text-lg mb-2'>
                    These professionals have this field of work
                  </h3>
                  <p>
                    {career.field.list.join(', ')}
                    .
                  </p>
                </div>
              </section>
            </>
          )
        }
        <section className='cards mt-6 md:mt-6'>

          <div>
            <h3 className='font-semibold text-lg md:text-xl lg:text-2xl mb-2'>
              Educational institutions that offer this career
            </h3>

            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ad rep
              rehenderit nulla omnis optio, quo dolorem.
              <a href='.'>see all</a>
            </p>

          </div>

          <Carousel />

          <div id='indicators-carousel' className='relative' data-carousel='static'>

            <div className='overflow-hidden relative rounded-lg h-[480px]'>

              <div className='duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20' data-carousel-item='active'>
                <Carousel />
              </div>

              <div className='duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10' data-carousel-item=''>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2' alt='...' />
              </div>

              <div className='hidden duration-700 ease-in-out absolute inset-0 transition-all transform' data-carousel-item=''>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2' alt='...' />
              </div>

              <div className='hidden duration-700 ease-in-out absolute inset-0 transition-all transform' data-carousel-item=''>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2' alt='...' />
              </div>

              <div className='duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10' data-carousel-item=''>
                <img src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2' alt='...' />
              </div>
            </div>

            <div className='flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2'>
              <button type='button' className='w-3 h-3 rounded-full bg-white dark:bg-gray-800' aria-current='true' aria-label='Slide 1' data-carousel-slide-to='0' />
              <button type='button' className='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800' aria-current='false' aria-label='Slide 2' data-carousel-slide-to='1' />
              <button type='button' className='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800' aria-current='false' aria-label='Slide 3' data-carousel-slide-to='2' />
              <button type='button' className='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800' aria-current='false' aria-label='Slide 4' data-carousel-slide-to='3' />
              <button type='button' className='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800' aria-current='false' aria-label='Slide 5' data-carousel-slide-to='4' />
            </div>

            <button type='button' className='flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none' data-carousel-prev=''>
              <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' /></svg>
                <span className='hidden'>Previous</span>
              </span>
            </button>
            <button type='button' className='flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none' data-carousel-next=''>
              <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
                <svg className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' /></svg>
                <span className='hidden'>Next</span>
              </span>
            </button>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
};

export default CareerInformationPage;
