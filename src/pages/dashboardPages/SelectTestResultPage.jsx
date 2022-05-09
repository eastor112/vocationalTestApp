import { Alert } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { resetSolvingTest } from '../../context/actions/solvingTest-actions';
import { clearActiveTestResultAction, clearQuestionsAction, destroyTestResultAction, getActiveTestResultAction, getAllTestsResultsAction } from '../../context/actions/vocational-actions';
import { toLocalTime } from '../../helpers/dateHelpers';

const SelectTestResultPage = () => {
  const width = useOutletContext();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { testsResults, questions } = useSelector((state) => state.vocational);

  useEffect(() => {
    if (testsResults.length === 0 || questions.length > 0) {
      dispatch(getAllTestsResultsAction());
      dispatch(clearActiveTestResultAction());
      dispatch(resetSolvingTest());
      dispatch(clearQuestionsAction());
    }
  }, []);

  const handleViewTestResult = (testResultId) => {
    dispatch(getActiveTestResultAction(testResultId));
    navigate(`/dashboard/testsresults/${testResultId}`);
  };

  const handleDeleteTestResult = (testResultId) => {
    dispatch(destroyTestResultAction(testResultId));
  };

  return (
    <main className={`min-h-screen pb-8 bg-light-1 pt-4 pr-10 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      {
        testsResults.length === 0 && (
          <Alert className='mt-2' color='yellow'>
            <span>
              <span className='font-medium mr-1'>
                Info!
              </span>
              You have not answered any vocational test yet.
              <Link to='/dashboard/tests' className='ml-2 text-blue-600 hover:text-blue-700 hover:underline'>
                Go to the tests
              </Link>
            </span>
          </Alert>
        )
      }
      {
        testsResults.length > 0
        && (
          <div>

            <h2 className='font-medium mb-3 text-lg'>
              Select a report to view details
            </h2>

            <div className='relative shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope='col' className='px-6 py-3'>
                      Test
                    </th>
                    <th scope='col' className='px-6 py-3 hidden sm:table-cell'>
                      Questions
                    </th>
                    <th scope='col' className='px-6 py-3 hidden md:table-cell'>
                      Type
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Date
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {
                    testsResults.map((testResult) => (
                      <tr key={uuidv4()} className='bg-white dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-gray-600'>
                        <th scope='row' className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                          {testResult.test.title}
                        </th>
                        <td className='px-6 py-4 hidden sm:table-cell'>
                          {testResult.test.numberOfQuestions}
                        </td>
                        <td className='px-6 py-4 hidden md:table-cell'>
                          {
                            testResult.test.type === 'FREE'
                              ? <span className='text-green-600'>Free</span>
                              : <span className='text-yellow-500'>Premium</span>
                          }
                        </td>
                        <td className='px-6 py-4 text-xs'>
                          {toLocalTime(testResult.createdAt)}
                        </td>
                        <td className='px-6 py-4 text-right'>
                          <div className='flex items-center justify-end flex-wrap gap-2'>

                            <button
                              type='button'
                              className='flex text-green-500 hover:text-white border border-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded text-xs px-2 py-1.5 text-center mr-1 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800'
                              onClick={() => handleViewTestResult(testResult.id)}
                            >
                              <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                              </svg>
                              View
                            </button>
                            <button
                              type='button'
                              className='flex text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded text-xs px-2 py-1.5 text-center mr-1 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
                              onClick={() => handleDeleteTestResult(testResult.id)}
                            >
                              <svg xmlns='http://www.w3.org/2000/svg' className='h-3.5 w-3.5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                              </svg>
                              Delete
                            </button>

                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        )
      }
    </main>
  );
};

export default SelectTestResultPage;
