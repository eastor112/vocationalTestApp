import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import TestCard from '../../components/organisms/simpleCard/TestCard';
import { getAllTestsAction } from '../../context/actions/testAdmin-actions';

const TestsListPage = () => {
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.testsAdmin);
  const width = useOutletContext();

  useEffect(() => {
    dispatch(getAllTestsAction());
  }, []);

  return (
    <main className={`min-h-screen ${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1' : ' pt-4 pr-10 pl-24 bg-light-1'}`}>

      <div className='w-full flex flex-wrap gap-5'>
        {tests.map((test) => (
          <TestCard
            key={test.id}
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
