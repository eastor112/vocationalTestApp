import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllUniversities } from '../../../services/universitiesServices';
import Carousel from '../carousel/Carousel';

const Advertisement = () => {
  const [universities, setUniversities] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllUniversities(4, page)
      .then((data) => {
        setUniversities(data.universities);
        setTotalPages(data.totalPages);
      });
  }, [page]);

  return (
    <section className='cards mt-32 md:mt-36 lg:mt-40'>

      <div>
        <h2 className='text-3xl md:text-4xl lg:text-5xl leading-5 font-semibold mt-6 md:mt-0 md:text-center'>
          Choose the best educational institution
        </h2>

        <div
          aria-label='description'
          className='text-xl md:text-lg lg:text-xl leading-4 md:leading-4 lg:leading-5 mt-10 md:mt-5 lg:mt-10 md:text-center'
        >
          We have summary information of the best universities. Find the best of them.
          You can also search for a specific university
          <Link to='/search' className='text-blue-600 hover:underline hover:text-blue-700 ml-1'>
            here
          </Link>
          .
        </div>
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
  );
};

export default Advertisement;
