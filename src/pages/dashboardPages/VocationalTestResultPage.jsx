import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import DoughnutChart from '../../components/organisms/doughnutChart/DoughnutChart';
import FoundCareers from '../../components/organisms/foundCareers/FoundCareers';
import ModalComponent from '../../components/organisms/modal/ModalComponent';
import CareersList from '../../components/organisms/listElement/CareersList';
import { setDataGraph, gifs, numberAndPercentage } from '../../helpers/testsHelpers';
import { useModal } from '../../hooks/useModal';
import { getFilteredCareers } from '../../services/careersServices';
import { getActiveTestResultAction } from '../../context/actions/vocational-actions';

const VocationalTestResultPage = () => {
  const rand = Math.random();
  const width = useOutletContext();

  const { resultId } = useParams();

  const dispatch = useDispatch();
  const { user: { names } } = useSelector((state) => state.auth);
  const { activeTestResult } = useSelector((state) => state.vocational);
  const { savedQuestionsResponses } = useSelector((state) => state.solvingTest);

  const [data, setData] = useState({});
  const [careers, setCareers] = useState([]);

  const { isOpen, openModal, closeModal } = useModal(false);

  useEffect(() => {
    if (Object.keys(activeTestResult).length === 0) {
      dispatch(getActiveTestResultAction(resultId));
    }
  }, []);

  useEffect(() => {
    if (activeTestResult.id) {
      const configGraph = setDataGraph(activeTestResult.answers);
      setData(configGraph);
    }
  }, [activeTestResult]);

  const handleSearchCareersAndOpenModal = (career) => {
    getFilteredCareers(career)
      .then((res) => {
        setCareers(res.results);
        openModal();
      });
  };

  return (
    <main className={`min-h-screen flex justify-center bg-light-1 pt-4 pr-10 pb-8 ${width === 64 ? 'pl-72 ' : 'pl-24'}`}>
      <div className='flex flex-col mt-2 mb-2 min-h-screen w-full'>

        {
          (Object.keys(activeTestResult).length > 0) ? (
            <>
              <Link to={-1} className='text-blue-500 mb-1 flex items-center hover:text-blue-700 hover:underline'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
                </svg>

                {
                  savedQuestionsResponses.length > 0 ? ' See test answers' : 'Back to all reports'
                }
              </Link>

              <div className='flex-1 border-2 border-solid border-primary-1 p-10 rounded-xl shadow-lg shadow-primary-2 opacity-90 bg-white'>
                <h3 className='font-bold text-2xl mb-5'>
                  {`Excelent ${names}!`}
                </h3>

                <h4>This is the summary of your answers:</h4>

                <div aria-label='summary-stats' className='flex flex-col-reverse items-center gap-4 sm:gap-14 sm:flex-row sm:justify-center sm:items-center mb-8'>

                  <div className='relative shadow-md sm:rounded-lg w-60'>
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2 border'>
                      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-gray'>
                        <tr className='text-center'>
                          <th scope='col' className='px-3 py-2 border border-gray-300'>
                            A
                          </th>
                          <th scope='col' className='px-3 py-2 border border-gray-300'>
                            B
                          </th>
                          <th scope='col' className='px-3 py-2 border border-gray-300'>
                            C
                          </th>
                          <th scope='col' className='px-3 py-2 border border-gray-300'>
                            D
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center'>
                          <td className='px-3 py-2 border border-gray-300'>
                            {numberAndPercentage(
                              activeTestResult.answers.A,
                              activeTestResult.test.numberOfQuestions,
                            )}
                          </td>
                          <td className='px-3 py-2 border border-gray-300'>
                            {numberAndPercentage(
                              activeTestResult?.answers.B,
                              activeTestResult.test.numberOfQuestions,
                            )}

                          </td>
                          <td className='px-3 py-2 border border-gray-300'>
                            {numberAndPercentage(
                              activeTestResult?.answers.C,
                              activeTestResult.test.numberOfQuestions,
                            )}
                          </td>
                          <td className='px-3 py-2 border border-gray-300'>
                            {numberAndPercentage(
                              activeTestResult?.answers.D,
                              activeTestResult.test.numberOfQuestions,
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className='w-36 h-36 '>
                    {
                      Object.keys(data).length > 0
                      && (
                        <DoughnutChart data={data} />)
                    }
                  </div>

                </div>

                <div aria-label='careers-list'>
                  <CareersList
                    option='first option,'
                    description={activeTestResult.test.descriptions[activeTestResult.firstOption]}
                    careers={activeTestResult.test.results[activeTestResult.firstOption]}
                    onClick={handleSearchCareersAndOpenModal}
                  />

                  <CareersList
                    option='second option,'
                    description={activeTestResult.test.descriptions[activeTestResult.secondOption]}
                    careers={activeTestResult.test.results[activeTestResult.secondOption]}
                    onClick={handleSearchCareersAndOpenModal}
                  />
                </div>

                <small className='italic mb-5'>
                  <span className='font-bold mr-1 not-italic'>Note:</span>
                  You can find more information about the careers by clicking on them,
                  before making your final decision.
                </small>

                <figure className='flex overflow-hidden self-start mt-6 max-h-60'>
                  <img
                    className='w-full  max-h-60 object-contain'
                    src={gifs[Math.round(rand * 2)]}
                    alt=''
                  />
                </figure>

              </div>
            </>
          )
            : (
              <div className='min-h-screen w-full flex justify-center items-center'>
                <svg role='status' className='inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-red-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
                  <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
                </svg>
              </div>
            )
        }

      </div>

      <ModalComponent
        isOpen={isOpen}
        closeModal={closeModal}
        closeOnOverlayClick={false}
      >
        <FoundCareers careers={careers} closeModal={closeModal} />

      </ModalComponent>

    </main>
  );
};

export default VocationalTestResultPage;
