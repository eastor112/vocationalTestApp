import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TestCardV2 = ({ id, title, numberOfQuestions, estimatedTime, openModal, type = 'FREE', setProduct }) => {
  const { user } = useSelector((state) => state.auth);

  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    if (user.purchasedTests.includes(id)) {
      setIsPurchased(true);
    }
  }, [user.purchasedTests]);

  const handleOpenTest = () => {
    setProduct({
      id,
      description: title,
      price: 15,
    });
    openModal();
  };

  return (
    <div className='relative flex flex-col justify-center w-68  border border-primary-1 overflow-hidden rounded-lg shadow-lg bg-white'>
      {
        type === 'FREE'
          ? <div className='absolute top-2 right-2 bg-green-100 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900'>Free</div>
          : <span className='absolute top-2 right-2 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900'>Premium</span>
      }

      <figure className='h-32 overflow-hidden flex justify-center items-center'>
        <img className='h-32' src={require('../../../assets/test_1.jpg')} alt='test_figure' />
      </figure>

      <h3 className='font-medium text-center'>{title}</h3>
      {
        isPurchased
          ? <h5 className='text-center text-xs mb-1 h-4 text-green-600'>You bought this test</h5>
          : <h5 className='text-center text-xs mb-1 h-4'> </h5>
      }
      <hr />

      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <tbody>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='w-1/2 px-4 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Questions:
            </th>
            <td className='px-4 py-1.5'>
              {numberOfQuestions}
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-4 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Estimated time:
            </th>
            <td className='px-4 py-1.5'>
              {`${estimatedTime} minutes`}
            </td>
          </tr>
        </tbody>
      </table>

      <div className='p-5 flex flex-col items-center'>
        {
          (type === 'FREE' || isPurchased)
          && (
            <Link
              to={`/dashboard/tests/${id}`}
              className='focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
            >
              Start the test
            </Link>
          )
        }
        {
          (type === 'PREMIUM' && !isPurchased)
          && (
            <button
              type='button'
              className='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900'
              onClick={handleOpenTest}
            >
              Buy the test
            </button>
          )
        }
      </div>
    </div>
  );
};

TestCardV2.defaultProps = {
  type: 'FREE',
};

TestCardV2.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
  estimatedTime: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  type: PropTypes.string,
  setProduct: PropTypes.func.isRequired,
};

export default TestCardV2;
