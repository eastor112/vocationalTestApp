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
          setCareer(careersData.find((car) => car.id === Number(id)));
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
            <FullWidthCard
              name={career.name}
              field={career.field.list}
              skills={career.skills.list}
              photo={career.photo}
            />
          )
        }

        <section className='profiles flex flex-col md:flex-row pt-5 md:pt-8 lg:pt-10'>
          <div className='entrants md:pr-8 lg:pr-10 mb-6'>
            <h3 className='font-semibold text-lg md:text-xl lg:text-2xl mb-2'>
              Required skills to study this a lawer career
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere
              at asperiores libero distinctio amet fugit quaerat tenetur odit cum,
              praesentium minus cupiditate tempora aspernatur. Minus fugiat ullam
              voluptatem corrupti?
            </p>
          </div>
          <div className='graduates md:pr-8 lg:pr-10'>
            <h3 className='font-semibold text-lg md:text-xl lg:text-2xl mb-2'>
              Employment field of a lawyer
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              facere at asperiores libero distinctio amet fugit quaerat tenetur
              odit cum, praesentium minus cupiditate tempora aspernatur. Minus
              fugiat ullamvoluptatem corrupti?
            </p>
          </div>
        </section>

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