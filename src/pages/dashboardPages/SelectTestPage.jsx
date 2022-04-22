import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import TestCardV2 from '../../components/organisms/simpleCard/TestCardV2';
import { getAllTestsAction } from '../../context/actions/vocational-actions';

const SelectTestPage = () => {
  const width = useOutletContext();
  const dispatch = useDispatch();
  const { tests } = useSelector((state) => state.vocational);

  useEffect(() => {
    dispatch(getAllTestsAction());
  }, []);

  return (
    <main className={`${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1 h-screen' : ' pt-4 pr-10 pl-24 bg-light-1 h-screen'}`}>
      <h2
        className='text-2xl font-bold text-dark-1 my-4'
      >
        Choose a Test
      </h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {
          tests
          && tests.map((test) => (
            <TestCardV2
              key={test.id}
              id={test.id}
              title={test.title}
              numberOfQuestions={test.numberOfQuestions}
              estimatedTime={test.estimatedTime}
            />
          ))
        }

      </div>

    </main>
  );
};

export default SelectTestPage;
