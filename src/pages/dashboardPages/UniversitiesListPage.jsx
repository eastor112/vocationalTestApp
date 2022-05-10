import { Button, Label, Select } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import UniversityCardV2 from '../../components/organisms/simpleCard/UniversityCardV2';
import { setUniversitiesAction } from '../../context/actions/universities-actions';

const UniversitiesListPage = () => {
  const width = useOutletContext();

  const dispatch = useDispatch();
  const { universities } = useSelector((state) => state.universities);

  useEffect(() => {
    if (universities.length === 0) {
      dispatch(setUniversitiesAction());
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={`min-h-screen ${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1' : ' pt-4 pr-10 pl-24 bg-light-1'}`}>
      <div className='flex flex-row-reverse justify-between items-center mb-6 mt-2'>
        <form aria-label='search-input' className='flex gap-1' onSubmit={handleSubmit}>
          <label htmlFor='table-search' className='sr-only'>Search</label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
            </div>
            <input
              type='search'
              id='table-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search a career'
              name='search'
            />
          </div>
          <Button
            type='submit'
          >
            Search
          </Button>
        </form>

        <div aria-label='number-selector' className='flex items-center gap-2'>
          <Label
            className='block'
            htmlFor='countries'
          >
            Items by page:
          </Label>
          <Select
            id='number-selector'
            className='pl-3 pr-7 '
            name='careersByPage'
          >

            <option className='px-3' value='4'>
              4
            </option>
            <option className='px-3' value='8'>
              8
            </option>
            <option className='px-3' value='12' selected>
              12
            </option>
            <option className='px-3' value='16'>
              16
            </option>
            <option className='px-3' value='20'>
              20
            </option>
          </Select>
        </div>
      </div>

      <div className='flex gap-3 flex-wrap'>
        {
          universities.length > 0
          && universities.map((university) => {
            return (
              <div key={university.id}>
                <UniversityCardV2 university={university} />
              </div>
            );
          })
        }
      </div>
    </main>

  );
};

export default UniversitiesListPage;
