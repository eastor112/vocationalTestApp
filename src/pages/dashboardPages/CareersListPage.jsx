import { useOutletContext } from 'react-router-dom';
import CareerCard from '../../components/organisms/simpleCard/CareerCard';

const CareersListPage = () => {
  const width = useOutletContext();

  return (
    <main className={`min-h-screen w-screen pt-4 pr-10 pb-12 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

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

      <button type='button' className='h-11 w-11  rounded-full bottom-5 right-5 text-white bg-purple-500 flex justify-center items-center shadow-md shadow-gray-500 hover:bg-purple-600 fixed'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
        </svg>
      </button>

    </main>
  );
};

export default CareersListPage;
