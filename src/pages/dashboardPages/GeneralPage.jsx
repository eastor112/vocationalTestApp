import { Link, useOutletContext } from 'react-router-dom';

const GeneralPage = () => {
  const width = useOutletContext();

  return (
    <main className={`min-h-screen pt-4 pr-10 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <section className='flex flex-col lg:flex-row gap-8 lg:gap-16 py-6'>

        <div className='flex-1 flex items-center h-64 border border-primary-1 overflow-hidden rounded-lg shadow-lg bg-white'>
          <figure className='hidden sm:flex flex-1 h-64 w-64 overflow-hidden justify-center items-center'>
            <img className='h-64' src={require('../../assets/test_image.jpeg')} alt='test_figure' />
          </figure>
          <div className='flex-1 p-5 flex flex-col items-center'>

            <h3 className='font-semibold text-center text-lg mb-3'>
              Vocational Test
            </h3>

            <p className='text-center text-sm mb-6'>
              A vocational test shows our strengths and abilities and relates them
              to a range of affined careers.
            </p>

            <Link
              data-cy='general-page-link'
              to='/dashboard/tests'
              className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2'
            >
              Go to the tests
            </Link>

          </div>
        </div>

        <div className='flex-1 flex items-center h-64 border border-primary-1 overflow-hidden rounded-lg shadow-lg bg-white'>
          <figure className='hidden sm:flex flex-1 h-64 w-64 overflow-hidden justify-center items-center'>
            <img className='h-64' src={require('../../assets/results.png')} alt='results_figure' />
          </figure>

          <div className='flex-1 p-5 flex flex-col items-center'>
            <h3 className='font-semibold text-center text-lg mb-3'>
              View your results
            </h3>

            <p className='text-center text-sm mb-6'>
              Here you can see your results. If you do the vocational test again,
              the results will be updated.
            </p>

            <Link to='/dashboard/testsresults' className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2'>
              Go to results
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default GeneralPage;
