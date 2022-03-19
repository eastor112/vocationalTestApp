import React from 'react';

const PopularTop = () => (
  <div className='popular'>
    <h3 className='text-sm font-bold mb-3 mt-6'>
      Popular careers
    </h3>
    <table className='w-full mt-2'>
      <thead className='text-sm text-dark-2'>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <th className='w-3/4 text-left'>Career</th>
          <th className='w-1/4'>Recom/week</th>
        </tr>
      </thead>
      <tbody className=''>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <td>
            <h4 className='font-semibold text-sm'>1. Lawer</h4>
            <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
          </td>
          <td className='text-right px-2'>
            <h5 className='font-semibold'>0.95k</h5>
            <p className='ml-9 px-1 bg-green-200 text-green-600 rounded-sm'>+125</p>
          </td>
        </tr>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <td>
            <h4 className='font-semibold text-sm'>2. Engineering</h4>
            <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
          </td>
          <td className='text-right px-2'>
            <h5 className='font-semibold'>0.95k</h5>
            <p className='ml-9 px-1 bg-red-200 text-red-600 rounded-sm'>-89</p>
          </td>
        </tr>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <td>
            <h4 className='font-semibold text-sm'>3. Nurse</h4>
            <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
          </td>
          <td className='text-right px-2'>
            <h5 className='font-semibold'>0.95k</h5>
            <p className='ml-9 px-1 bg-yellow-100 text-yellow-600 rounded-sm'>+10</p>
          </td>
        </tr>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <td>
            <h4 className='font-semibold text-sm'>4. Teacher</h4>
            <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
          </td>
          <td className='text-right px-2'>
            <h5 className='font-semibold'>0.95k</h5>
            <p className='ml-9 px-1 bg-red-200 text-red-600 rounded-sm'>-100</p>

          </td>
        </tr>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <td>
            <h4 className='font-semibold text-sm'>5. Pharmacist</h4>
            <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
          </td>
          <td className='text-right px-2'>
            <h5 className='font-semibold'>0.95k</h5>
            <p className='ml-9 px-1 bg-yellow-100 text-yellow-600 rounded-sm'>+10</p>
          </td>
        </tr>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <td>
            <h4 className='font-semibold text-sm'>6. Dentist</h4>
            <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
          </td>
          <td className='text-right px-2'>
            <h5 className='font-semibold'>0.95k</h5>
            <p className='ml-9 px-1 bg-green-200 text-green-600 rounded-sm'>+65</p>
          </td>
        </tr>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <td>
            <h4 className='font-semibold text-sm'>7. Dentist</h4>
            <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
          </td>
          <td className='text-right px-2'>
            <h5 className='font-semibold'>0.95k</h5>
            <p className='ml-9 px-1 bg-green-200 text-green-600 rounded-sm'>+65</p>
          </td>
        </tr>
        <tr className='border-b border-solid border-collapse border-primary-1'>
          <td>
            <h4 className='font-semibold text-sm'>8. Dentist</h4>
            <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
          </td>
          <td className='text-right px-2'>
            <h5 className='font-semibold'>0.95k</h5>
            <p className='ml-9 px-1 bg-green-200 text-green-600 rounded-sm'>+65</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PopularTop;
