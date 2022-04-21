import { useSelector } from 'react-redux';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createTestResult } from '../../services/vocationalServices';

const GeneralPage = () => {
  const width = useOutletContext();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleCreateTestResult = () => {
    Swal.fire({
      title: 'Initializing the test...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    createTestResult(user.uid)
      .then((testResult) => {
        console.log(testResult);
        Swal.close();
      });

    // navigate('/dashboard/test');
  };

  return (
    <main className={`min-h-screen w-screen pt-4 pr-10 bg-light-1 ${width === 64 ? 'pl-72' : 'pl-24'}`}>

      <h2
        className='text-2xl font-bold text-dark-1 my-4'
      >
        General
      </h2>

      <section className='flex flex-col lg:flex-row gap-8 lg:gap-16'>

        <div className='flex-1 flex items-center h-64 border border-primary-1 overflow-hidden rounded-lg shadow-lg bg-white'>
          <figure className='hidden sm:flex flex-1 h-64 w-64 overflow-hidden justify-center items-center'>
            <img className='h-64' src={require('../../assets/test_image.jpeg')} alt='test_figure' />
          </figure>
          <div className='flex-1 p-5 flex flex-col items-center'>

            <h3 className='font-semibold text-center text-lg mb-3'>
              Take the vocational test
            </h3>

            <p className='text-center text-sm mb-6'>
              A vocational test shows our strengths and abilities and relates them
              to a range of affined careers.
            </p>

            <button
              type='button'
              className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2'
              onClick={handleCreateTestResult}
            >
              Go to the test
            </button>

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

            <Link to='/dashboard/test/result' className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2'>
              Go to results
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default GeneralPage;
