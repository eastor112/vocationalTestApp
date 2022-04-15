import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { emailValidationAsync } from '../../actions/auth-actions';
import { clearError, setLoading } from '../../actions/ui-actions';

const ValidatePage = () => {
  const { hash } = useParams();
  const dispatch = useDispatch();

  const { error, isLoading } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(clearError());
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(emailValidationAsync(hash));
    }, 1000);

    return () => {
      dispatch(clearError());
    };
  }, []);

  return (
    <main className='px-6 md:px-20 lg:px-24 pb-3 pt-20 flex flex-col items-center justify-center h-screen'>

      {
        isLoading
        && (
          <div aria-label='loading' className='flex flex-col justify-center items-center'>
            <svg role='status' className='block mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor' />
              <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill' />
            </svg>
            <h3 className='text-lg font-medium'>Wait a moment, we are validating your email</h3>
          </div>
        )
      }

      {
        (error && !isLoading)
        && (
          <div aria-label='error' className='flex flex-col justify-center items-center'>

            <i className='fa-regular fa-circle-xmark  text-4xl text-red-500 pb-5' />
            <h3 className='text-lg font-medium'>
              Your account could not be activated
            </h3>
            <p>
              Please try again later. If the problem persists, please contact us.
            </p>

            <p className='text-gray-600 text-center'>
              Go to
              <Link to='/' className='ml-1 text-blue-500 hover:text-blue-700 hover:underline'>Home</Link>
            </p>

          </div>
        )
      }
      {
        (!error && !isLoading) && (
          <div aria-label='success' className='flex flex-col justify-center items-center'>

            <i className=' fa-regular fa-circle-check  text-4xl text-green-500 pb-5' />

            <h3 className='text-lg font-medium'>
              Your account has been activated
            </h3>

            <p className='text-gray-600 text-center'>
              Go to the panel
              <Link to='/dashboard' className='ml-1 underline text-blue-500 hover:text-blue-700'>here</Link>
            </p>

          </div>
        )
      }

    </main>
  );
};

export default ValidatePage;
