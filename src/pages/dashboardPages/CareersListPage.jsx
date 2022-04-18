import { useOutletContext } from 'react-router-dom';
import CareerCard from '../../components/organisms/simpleCard/CareerCard';

const CareersListPage = () => {
  const width = useOutletContext();

  return (
    <main className={`min-h-screen w-screen pt-4 pr-10 pb-12 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>
      <h2 className='text-2xl font-bold text-dark-1 my-4'>
        Careers
      </h2>

      <div className='py-4'>
        <label htmlFor='table-search' className='sr-only'>Search</label>
        <div className='relative mt-1'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
          </div>
          <input type='text' id='table-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search a career' />
        </div>
      </div>

      <section className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-5 gap-x-4'>
        <CareerCard />
        <CareerCard />
        <CareerCard />
        <CareerCard />
        <CareerCard />
        <CareerCard />
        <CareerCard />
        <CareerCard />
      </section>

      <button className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type='button' data-modal-toggle='defaultModal'>
        Toggle modal
      </button>

      <div id='defaultModal' tabIndex='-1' aria-hidden='true' className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center'>
        <div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>

          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>

            <div className='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                Terms of Service
              </h3>
              <button type='button' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white' data-modal-toggle='defaultModal'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' /></svg>
              </button>
            </div>

            <div className='p-6 space-y-6'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                With less than a month to go before the European Union enacts new
                consumer privacy laws for its citizens, companies around the world
                are updating their terms of service agreements to comply.
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                The European Union’s General Data Protection Regulation (G.D.P.R.)
                goes into effect on May 25 and is meant to ensure a common set of data
                rights in the European Union. It requires organizations to notify users as
                soon as possible of high-risk data breaches that could personally affect them.
              </p>
            </div>

            <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
              <button data-modal-toggle='defaultModal' type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>I accept</button>
              <button data-modal-toggle='defaultModal' type='button' className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>Decline</button>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default CareersListPage;
