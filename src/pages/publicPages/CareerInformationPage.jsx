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
                <div className='entrants md:pr-8 lg:pr-10 mb-6'>
                  <h3 className='font-semibold text-lg md:text-xl lg:text-2xl mb-2'>
                    This is a brief description of this profession
                  </h3>
                  <p>
                    {career.description}
                  </p>
                </div>
                <div className='graduates md:pr-8 lg:pr-10'>
                  <h3 className='font-semibold text-sm md:text-xl lg:text-2xl mb-2'>
                    These are the priority skills if you want to study this profession
                  </h3>
                  <p>
                    {career.skills.list.join(', ')}
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

        </section>

      </main>
      <Footer />
    </>
  );
};

export default CareerInformationPage;
