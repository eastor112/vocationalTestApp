/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../../components/organisms/footer/Footer';
import { getUniversityById } from '../../services/universitiesServices';
import MapChart from '../../components/organisms/mapChart/MapChart';

const UniversityProfilePage = () => {
  const { id } = useParams();
  const [university, setUniversity] = useState({});

  useEffect(() => {
    getUniversityById(id)
      .then((data) => {
        if (data === 'error') {
          return 'error';
        }
        return setUniversity(data);
      });
  }, [id]);

  return (
    <>

      <section className='font-roboto overflow-y-visible box-border '>

        <div className='mx-20 py-20'>
          {university.id && (
            <div className='article'>

              <section className='university'>
                <div className='title text-3xl'>
                  <h1
                    data-cy='university-name'
                    className='text-3xl font-medium mt-5'
                  >
                    {university.name}
                  </h1>
                </div>

                <figure className=' mt-10'>
                  {
                    university.campus.length > 0
                    && <img data-cy='campus-image' className=' h-72 w-full' src={university.campus[0]} alt={university.name} />
                  }
                </figure>

              </section>

              <section className='mision-vision grid grid-cols-1 md:grid-cols-2  mb-5 mt-10 gap-x-2'>
                <div className='mission-vision mt-10'>
                  <h3 className='text-3xl font-medium p-2'>Mission And Vision</h3>
                  <div className='text-justify p-2'>
                    <p className='mb-4'>
                      {university.mission}
                    </p>
                    <p>
                      {university.vision}
                    </p>
                  </div>

                </div>

                <div className='how-to-apply md:border-l-2 p-8 '>
                  <p className='text-3xl font-medium p-5'>How To Apply</p>

                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                    {university.process && university.process.map((process) => {
                      const count = university.process.indexOf(process) + 1;
                      return (
                        <li className='' key={uuidv4()}>
                          {`${count}`}
                          .
                          {process}
                        </li>
                      );
                    })}
                  </ul>

                </div>
              </section>

              <section className='Academic Offer'>
                <p className='text-3xl font-medium p-5'>Academic Offer</p>
                <div className='academic-offer mb-20 grid grid-cols-1 md:grid-cols-3  gap-4 '>

                  {university.offer && university.offer.map((offer) => {
                    return (
                      <div key={uuidv4()}>
                        <figure className='h-36 overflow-hidden'>
                          <img className='h-36' src={offer.photo ? offer.photo : require('../../assets/professional.jpg')} alt='' />
                        </figure>
                        <div className='mt-2'>
                          <a
                            className='text-teal-600 hover:text-teal-400 underline underline-offset-8 '
                            href={offer.url ? offer.url : '.'}
                            target='_blank'
                            rel='noreferrer'
                          >
                            {offer.name}

                          </a>
                          <p className='p-2'>
                            {offer.description.substring(0, 80)}
                            ...
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className='another-important-information mb-20 grid grid-cols-1 md:grid-cols-2  gap-4 '>
                <div>
                  <p className='text-3xl font-medium'>Other Important Information</p>
                  <div className='text-justify p-5'>
                    <a href={university.url} target='_blank' rel='noreferrer'>Official Page</a>
                  </div>

                </div>

                <div className='md:border-l-2 p-10'>
                  <p className='text-3xl font-medium'>Location</p>
                  <div data-cy='map'>
                    <MapChart />
                  </div>
                </div>

              </section>
              <div className='social-media-links fixed top-80 right-5 flex flex-col gap-2'>
                {
                  university.socialMedia.linkedIn !== '' && (
                    <a href={university.socialMedia.linkedIn} target='_blank' rel='noreferrer'>
                      <button
                        type='button'
                        className=' rounded-full w-12 h-12 text-white bg-blue-800 hover:bg-blue-900 flex justify-center items-center shadow-md shadow-gray-400'
                      >
                        <i className='fa-brands fa-linkedin-in' />
                      </button>

                    </a>
                  )
                }
                {
                  university.socialMedia.facebook !== '' && (
                    <a href={university.socialMedia.facebook} target='_blank' rel='noreferrer'>
                      <button
                        type='button'
                        className=' rounded-full w-12 h-12 text-white bg-blue-500 hover:bg-blue-600 flex justify-center items-center shadow-md shadow-gray-400'
                      >
                        <i className='fa-brands fa-facebook-f' />

                      </button>
                    </a>
                  )
                }
                {
                  university.socialMedia.instagram !== '' && (
                    <a href={university.socialMedia.instagram} target='_blank' rel='noreferrer'>
                      <button type='button' className='rounded-full w-12 h-12 text-white bg-gradient-to-r from-yellow-300 via-orange-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 flex justify-center items-center shadow-md shadow-gray-400'><i className='fa-brands fa-instagram' /></button>
                    </a>
                  )
                }
                {
                  university.socialMedia.twitter !== '' && (
                    <a href={university.socialMedia.twitter} target='_blank' rel='noreferrer'>
                      <button type='button' className='rounded-full w-12 h-12 text-white bg-blue-300 hover:bg-blue-400 flex justify-center items-center shadow-md shadow-gray-400'><i className='fa-brands fa-twitter' /></button>
                    </a>
                  )
                }
              </div>

            </div>
          )}

        </div>

      </section>

      <Footer />
    </>
  );
};

export default UniversityProfilePage;
