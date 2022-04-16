import { Link } from 'react-router-dom';

const RegistrationConfirmPage = () => {
  return (
    <main className='px-6 md:px-20 lg:px-24 pb-3 pt-20 flex flex-col items-center h-screen justify-center'>
      <div className='text-center flex flex-col items-center sm:w-2/3'>

        <figure className='w-96 mb-5'>
          <img src='https://media.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif' alt='congratulations' />
        </figure>

        <h3 className='font-roboto font-medium text-xl text-green-600 mb-5'>
          Congratulations, your account has been created
        </h3>
        <p className='text-gray-700 text-base leading-4'>
          We send you an email with a link to activate your account,
          please check your inbox.
          <span className='font-medium mx-1'>
            The link will expire in 24 hours.
          </span>
          If you don&apos;t receive the email,
          please
          <span className='font-medium ml-1'>
            check your spam folder.
          </span>
        </p>

        <Link to='/login' className='font-medium text-primary-2 hover:text-primary-1 border border-primary-2 p-2 mt-6 w-64 rounded-sm'>
          <i className='fa-solid fa-house mr-1' />
          Go to login page
        </Link>
      </div>

    </main>
  );
};

export default RegistrationConfirmPage;
