import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import TestCard from '../../components/organisms/simpleCard/TestCard';
import { fetchAllTestsService } from '../../services/vocationalServices';

const TestsListPage = () => {
  const width = useOutletContext();
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetchAllTestsService().then((res) => {
      setTests(res);
    });
  }, []);

  return (
    <main className={`${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1 h-screen' : ' pt-4 pr-10 pl-24 bg-light-1 h-screen'}`}>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {tests.map((test) => (
          <TestCard
            test={test}
          />
        ))}
      </div>

      <button type='button' className='h-11 w-11  rounded-full bottom-5 right-5 text-white bg-purple-500 flex justify-center items-center shadow-md shadow-gray-500 hover:bg-purple-600 fixed'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
        </svg>
      </button>

    </main>
  );
};

export default TestsListPage;
