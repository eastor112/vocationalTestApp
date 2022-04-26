import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
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
  const { activeTestResult } = useSelector((state) => state.vocational);
  const { savedQuestionsResponses } = useSelector((state) => state.solvingTest);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!testId) {
      navigate('/dashboard/tests');
    }

    dispatch(getTestAction(testId));

    dispatch(getAllTestQuestionsAction(testId));
  }, [testId, navigate]);

  useEffect(() => {
    if (activeTestResult.id && savedQuestionsResponses.length === 0) {
      navigate(`/dashboard/testsresults/${activeTestResult.id}`);
    }
  }, [activeTestResult]);

  const handleFinish = () => {
    if (Object.keys(activeTestResult).length === 0) {
      dispatch(createTestResultAction(activeTestResult));
    } else {
      navigate(`/dashboard/testsresults/${activeTestResult.id}`);
    }
  };

  return (

    <main className={`pt-4 pr-10 bg-light-1 pb-8 min-h-screen ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      {
        Object.keys(questions).length > 0
          ? (
            <div className='relative'>
              {
                savedQuestionsResponses.length > 0
                && (
                  <div className='p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800' role='alert'>
                    <span className='font-medium mr-2'>Info!</span>
                    You cannot modify a completed test. But you can do it again
                    <Link
                      to='/dashboard/tests'
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded text-sm px-3 py-1.5 ml-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                    >
                      Repeat test
                    </Link>
                  </div>
                )
              }

              <h1 className='text-3xl md:text-4xl lg:text-5xl leading-5 xl:leading-8 font-semibold  md:mt-0'>Vocational Test</h1>
              <div>
                <p className='mt-10 text-justify'>
                  Todos tenemos una disposición natural para trabajar mejor en los campos
                  que más nos interesan y en los que creemos ser más eficaces.
                  Esta eficacia produce satisfacción, lo que nos impulsa a progresar
                  más rapidamente en el desarrollo de nuestras
                  habilidades
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
                  {
                    Object.keys(activeTestResult).length > 0 ? 'View Results' : 'Finish test'
                  }
                </button>
              </div>
            </div>
          )
          : (
            <div className='w-full h-screen flex justify-center items-center'>
              <svg role='status' className='inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-red-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
              </svg>
            </div>
          )
      }

    </main>
  );
};

export default VocationalTestPage;
