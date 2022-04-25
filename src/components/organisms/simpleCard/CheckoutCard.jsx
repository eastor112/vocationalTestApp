import React from 'react';

const CheckoutCard = () => {
  return (
    <div className='flex flex-col justify-center w-[390px] h-[450px]  border border-primary-1 overflow-hidden rounded-lg shadow-lg bg-white'>

      <figure className=' h-60 overflow-hidden flex justify-center items-center'>
        <img className='h-60' src={require('../../../assets/test_1.jpg')} alt='test_figure' />
      </figure>

      <h3 className='font-medium text-center mb-2'>Premium Test</h3>
      <hr />

      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <tbody>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='w-1/2 px-4 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Questions:
            </th>
            <td className='px-4 py-1.5'>
              80
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='px-4 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Estimated time:
            </th>
            <td className='px-4 py-1.5'>
              1 hour
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800'>
            <th scope='row' className='w-1/2 px-4 py-1.5 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              Number of Intents:
            </th>
            <td className='px-4 py-1.5'>
              limitless
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutCard;
