import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import DoughnutChart from '../../components/organisms/doughnutChart/DoughnutChart';
import FoundCareers from '../../components/organisms/foundCareers/FoundCareers';
import ModalComponent from '../../components/organisms/modal/ModalComponent';
import CareersList from '../../components/organisms/listElement/CareersList';
import { careersResults, setDataGraph, gifs } from '../../helpers/testsHelpers';
import { useModal } from '../../hooks/useModal';
import { getFilteredCareers } from '../../services/careersServices';

const VocationalTestResultPage = () => {
  const rand = Math.random();
  const width = useOutletContext();

  const { unsavedQuestionsResponses } = useSelector((state) => state.solvingTest);
  const { user: { names } } = useSelector((state) => state.auth);

  const [data, setData] = useState({});
  const [processedData, setProcessedData] = useState(null);
  const [careers, setCareers] = useState([]);

  const { isOpen, openModal, closeModal } = useModal(false);

  useEffect(() => {
    const processed = careersResults(unsavedQuestionsResponses);
    setProcessedData(processed);

    const configGraph = setDataGraph(processed.percents);
    setData(configGraph);
  }, []);

  const handleSearchCareersAndOpenModal = (career) => {
    getFilteredCareers(career)
      .then((res) => {
        setCareers(res.results);
        openModal();
      });
  };

  return (
    <main className={`min-h-screen flex justify-center bg-light-1 pt-4 pr-10 pb-8 ${width === 64 ? 'pl-72 ' : 'pl-24'}`}>

      <div className='flex flex-col-reverse md:flex-row-reverse md:justify-center md:max-w-4xl items-center mx-0 sm:mx-1 md:mx-5 gap-6 mt-6 mb-2'>

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
                      {`${processedData?.answers.A} (${processedData?.percents.A}%)`}
                    </td>
                    <td className='px-3 py-2 border border-gray-300'>
                      {`${processedData?.answers.B} (${processedData?.percents.B}%)`}
                    </td>
                    <td className='px-3 py-2 border border-gray-300'>
                      {`${processedData?.answers.C} (${processedData?.percents.C}%)`}
                    </td>
                    <td className='px-3 py-2 border border-gray-300'>
                      {`${processedData?.answers.D} (${processedData?.percents.D}%)`}
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

          {
            processedData && (
              <div aria-label='careers-list'>

                <CareersList
                  option='first option,'
                  description={processedData.firstOption.description}
                  careers={processedData.firstOption.careers}
                  onClick={handleSearchCareersAndOpenModal}
                />

                <CareersList
                  option='second option,'
                  description={processedData.secondOption.description}
                  careers={processedData.secondOption.careers}
                  onClick={handleSearchCareersAndOpenModal}
                />
              </div>
            )
          }

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
