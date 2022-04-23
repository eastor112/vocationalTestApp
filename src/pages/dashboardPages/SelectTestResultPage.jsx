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

    </main>
  );
};

export default SelectTestResultPage;
