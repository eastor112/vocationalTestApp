import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { clearActiveTestResultAction, getActiveTestResultAction, getAllTestsResultsAction } from '../../context/actions/vocational-actions';
import { toLocalTime } from '../../helpers/dateHelpers';

const SelectTestResultPage = () => {
  const width = useOutletContext();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { testsResults } = useSelector((state) => state.vocational);

  useEffect(() => {
    dispatch(getAllTestsResultsAction());
    dispatch(clearActiveTestResultAction());
  }, []);

  const handleViewTestResult = (testResultId) => {
    dispatch(getActiveTestResultAction(testResultId));
    navigate(`/dashboard/testsresults/${testResultId}`);
  };

  return (
    <main className={`min-h-screen pb-8 bg-light-1 pt-4 pr-10 ${width === 64 ? 'pl-72' : 'pl-24'}`}>
      {
        testsResults.length > 0
          ? (
            <div>

              <h2>
                Select a result to see details
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
                            <button
                              type='button'
                              className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                              onClick={() => handleViewTestResult(testResult.id)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
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

export default SelectTestResultPage;
