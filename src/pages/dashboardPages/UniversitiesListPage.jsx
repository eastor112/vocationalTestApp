import { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { getAllUniversities } from '../../services/universitiesServices';

const UniversitiesListPage = () => {
  const width = useOutletContext();
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    getAllUniversities()
      .then((res) => {
        setUniversities(res.universities);
      });
    return () => {

    };
  }, []);

  return (
    <main className={`min-h-screen ${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1' : ' pt-4 pr-10 pl-24 bg-light-1'}`}>

      <h3 className='text-2xl font-bold text-dark-1 my-4'>Universities</h3>
      <ul className='list-inside list-disc'>
        {
          universities.length > 0
          && universities.map((university) => {
            return (
              <Link key={university.id} to={`/dashboard/institution/${university.id}/principal`}>
                <li className='text-blue-600 hover:text-blue-700 hover:link hover:underline'>
                  {university.name}
                </li>
              </Link>
            );
          })
        }
      </ul>
    </main>

  );
};

export default UniversitiesListPage;
