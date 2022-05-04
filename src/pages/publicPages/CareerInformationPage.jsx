import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Carousel from '../../components/organisms/carousel/Carousel';
import Footer from '../../components/organisms/footer/Footer';
import FullWidthCard from '../../components/organisms/fullWidthCard/FullWidthCard';
import careersData from '../../data/careers';
import { getCareerById } from '../../services/careersServices';
import { getUniversitiesByCareer } from '../../services/universitiesServices';

const CareerInformationPage = () => {
  const { id } = useParams();
  const [career, setCareer] = useState({});
  const [universities, setUniversities] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

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

  useEffect(() => {
    if (career.id) {
      getUniversitiesByCareer(career.name, 4, page)
        .then((data) => {
          setUniversities(data.results);
          setTotalPages(data.totalPages);
        });
    }
  }, [career, page]);

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
                  <p className='mb-6'>
                    {career.description}
                  </p>
                </div>

                <div className='graduates md:pr-8 lg:pr-10 flex-1'>
                  <h3 className='font-semibold text-lg md:text-base lg:text-lg mb-2'>
                    These are the priority skills if you want to study this profession
                  </h3>
                  <p className='mb-6'>
                    {career.skills.list.join(', ')}
                    .
                  </p>
                </div>

                <div className='graduates md:pr-8 lg:pr-10 flex-1'>
                  <h3 className='font-semibold text-lg md:text-base lg:text-lg mb-2'>
                    These professionals have this field of work
                  </h3>
                  <p className='mb-6'>
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
              We present some universities that offer this degree or others related to it.
              You can see more information about these universities in the see more
              link or by searching for yourself
              <Link className='ml-1 text-blue-600 hover:text-blue-700 hover:underline' to='/search'>here</Link>
              .
            </p>

          </div>
          {
            universities.length > 0
            && (
              <Carousel
                universities={universities}
                setPage={setPage}
                totalPages={totalPages}
              />
            )
          }
        </section>

      </main>
      <Footer />
    </>
  );
};

export default CareerInformationPage;
