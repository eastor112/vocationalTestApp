import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Question from '../../components/organisms/question/Question';
import {
  getAllTestQuestionsAction,
  getTestAction,
  createTestResultAction,
} from '../../context/actions/vocational-actions';

const VocationalTestPage = () => {
  const width = useOutletContext();

  const { testId } = useParams();
  const navigate = useNavigate();
  const { questions } = useSelector((state) => state.vocational);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!testId) {
      navigate('/dashboard/tests');
    }

    dispatch(getTestAction(testId));

    dispatch(getAllTestQuestionsAction(testId));
  }, [testId, navigate]);

  const handleFinish = () => {
    dispatch(createTestResultAction());
    navigate('/dashboard/test/result');
  };

  return (

    <main className={`pt-4 pr-10 bg-light-1 pb-8 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <h1 className='text-3xl md:text-4xl lg:text-5xl leading-5 xl:leading-8 font-semibold  md:mt-0'>Vocational Test</h1>
      <div>
        <p className='mt-10 text-justify'>
          Todos tenemos una disposición natural para trabajar mejor en los campos que más nos
          interesan y en los que creemos ser más eficaces. Esta eficacia produce satisfacción,
          lo que nos impulsa a progresar más rapidamente en el desarrollo de nuestras habilidades
        </p>
        <br />
        <div className=' md:grid grid-cols-2 gap-2'>
          {
            questions.map((question) => (
              <Question
                key={uuidv4()}
                question={question}
              />
            ))
          }
        </div>
        <br />
        <br />
      </div>

      <div className='w-full flex justify-center'>
        <button
          type='button'
          className='w-1/2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
          onClick={handleFinish}
        >
          Finish
        </button>
      </div>

    </main>
  );
};

export default VocationalTestPage;
