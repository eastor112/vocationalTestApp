import { useEffect, useState } from 'react';
import SearchBar from '../../components/organisms/searchBar/SearchBar';
import UniversityCard from '../../components/organisms/simpleCard/UniversityCard';
import { getAllUniversities } from '../../services/universitiesServices';

const SearchUniversityPage = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    getAllUniversities().then((data) => {
      const dataPublicated = data.universities.filter((university) => {
        return university.isPublicated;
      });
      setUniversities(dataPublicated);
    });
  }, []);

  return (
    <main className='px-6 md:px-20 lg:px-24 pb-3 pt-16'>
      <SearchBar setUniversities={setUniversities} />

      <section className='results mt-44 lg:mt-36 xl:mt-24'>
        <div className='card-container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-6 gap-10'>
          {
            universities.length > 0
            && universities.map((university) => {
              return (
                <UniversityCard key={university.id} university={university} />
              );
            })

          }
        </div>
      </section>

    </main>

  );
};

export default SearchUniversityPage;
