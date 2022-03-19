import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Sidebar from '../components/organisms/sidebar/Sidebar';

// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Visitors and Subscribers statistics (monthly)',
      position: 'top',
      align: 'start',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Visitors',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Subscribers',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function Dashboard() {
  const [width, setWidth] = useState(64);
  return (
    <>
      <Sidebar setWidth={setWidth} />

      <main className={`${width === 64 ? 'pt-4 pr-10 pl-72 bg-light-1' : ' pt-4 pr-10 pl-24 bg-light-1'}`}>

        <h2
          className='text-2xl font-bold text-dark-1 my-4'
        >
          Dashboard
        </h2>

        <div className='general-stats grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8'>

          <div className='stat min-w-fit p-2 bg-light-2 flex items-center rounded-lg'>
            <figure className='m-4 rounded-full w-12 h-12 lg:w-14 lg:h-14 overflow-hidden flex flex-shrink-0 justify-center items-center bg-blue-200'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-blue-600' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
              </svg>
            </figure>
            <div className=''>
              <h3 className='font-bold text-lg'>1 478 286</h3>
              <p className='whitespace-nowrap text-sm text-gray-600'>Total visits</p>
              <p className='whitespace-nowrap text-xs text-gray-600 flex items-center'>
                <span className='flex items-center text-success-1 mr-1'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='inline-block h-4 w-4 lg:h-6 lg:w-6 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                  </svg>
                  4.07%
                </span>
                <p>
                  Last month
                </p>
              </p>
            </div>
          </div>

          <div className='stat min-w-fit p-2 bg-light-2 flex items-center rounded-lg'>
            <figure className='m-4 rounded-full w-12 h-12 lg:w-14 lg:h-14 overflow-hidden flex flex-shrink-0 justify-center items-center bg-green-200'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-green-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' />
              </svg>
            </figure>
            <div className=''>
              <h3 className='font-bold text-lg'>478 520</h3>
              <p className='whitespace-nowrap text-sm text-gray-600'>Total vocational test</p>
              <p className='whitespace-nowrap text-xs text-gray-600 flex items-center'>
                <span className='flex items-center text-success-1 mr-1'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='inline-block h-4 w-4 lg:h-6 lg:w-6 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                  </svg>
                  0.24%
                </span>
                Last month
              </p>
            </div>
          </div>

          <div className='stat min-w-fit p-2 bg-light-2 flex items-center rounded-lg'>
            <figure className='m-4 rounded-full w-12 h-12 lg:w-14 lg:h-14 overflow-hidden flex flex-shrink-0 justify-center items-center bg-violet-200'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-violet-600' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </figure>
            <div className=''>
              <h3 className='font-bold text-lg'>1 872</h3>
              <p className='whitespace-nowrap text-sm text-gray-600'>Total subscriptions</p>
              <p className='whitespace-nowrap text-xs text-gray-600 flex items-center'>
                <span className='flex items-center text-red-600 mr-1'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='inline-block h-4 w-4 lg:h-6 lg:w-6 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6' />
                  </svg>
                  1.64%
                </span>
                <p>
                  Last month
                </p>
              </p>
            </div>
          </div>

          <div className='stat min-w-fit p-2 bg-light-2 flex items-center rounded-lg'>
            <figure className='m-4 rounded-full w-12 h-12 lg:w-14 lg:h-14 overflow-hidden flex flex-shrink-0 justify-center items-center bg-yellow-100'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-yellow-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' />
              </svg>
            </figure>
            <div className=''>
              <h3 className='font-bold text-lg'>5 367</h3>
              <p className='whitespace-nowrap text-sm text-gray-600'>Total chat interactions</p>
              <p className='whitespace-nowrap text-xs text-gray-600 flex items-center'>
                <span className='flex items-center text-warning-1 mr-1'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='inline-block h-4 w-4 lg:h-6 lg:w-6 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                  0.00%
                </span>
                <p>
                  Last month
                </p>
              </p>
            </div>
          </div>

        </div>

        <div className='flex flex-col md:flex-row gap-10 pb-8'>

          <div className='left flex flex-col md:w-9/12'>

            <div className='graph h-80'>
              <Line options={options} data={data} />
            </div>

            <div className='late-payments'>

              <h3 className='text-sm font-bold mb-3 mt-6'>Subscriptors with late Payments</h3>

              <table className='w-full'>
                <thead className='text-sm text-dark-2'>
                  <tr className='border-b border-solid border-primary-1'>
                    <th className='whitespace-nowrap'>Id</th>
                    <th className='whitespace-nowrap'>User name</th>
                    <th className='whitespace-nowrap'>Payment status</th>
                    <th className='whitespace-nowrap'>Actions</th>
                  </tr>
                </thead>
                <tbody className='text-xs'>
                  <tr className='border-b border-solid border-primary-1 text-center h-fit'>
                    <td>{(Math.random() * 45000).toFixed(0)}</td>
                    <td>{faker.name.findName()}</td>
                    <td className='flex items-center h-6'>
                      <span className='w-2/4 text-center bg-red-200 text-red-600 rounded-sm border border-solid border-gray-600'>overdue</span>
                      <p className='w-2/4 text-left ml-2 whitespace-nowrap'>for 08d-07h</p>
                    </td>

                    <td className=''>
                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-success-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                      </button>

                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-neutral-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                        </svg>
                      </button>

                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-danger-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                      </button>
                    </td>
                  </tr>

                  <tr className='border-b border-solid border-primary-1 text-center h-6'>
                    <td>{(Math.random() * 45000).toFixed(0)}</td>
                    <td>{faker.name.findName()}</td>
                    <td className='flex items-center h-6'>
                      <span className='w-2/4 text-center bg-yellow-200 text-yellow-600 rounded-sm border border-solid border-gray-600'>due</span>
                      <p className='w-2/4 text-left ml-2 whitespace-nowrap'>for 03d-12h</p>
                    </td>
                    <td className=''>
                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-success-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                      </button>

                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-neutral-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                        </svg>
                      </button>

                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-danger-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                      </button>
                    </td>
                  </tr>

                  <tr className='border-b border-solid border-primary-1 text-center h-6'>
                    <td>{(Math.random() * 45000).toFixed(0)}</td>
                    <td>{faker.name.findName()}</td>
                    <td className='flex items-center h-6'>
                      <span className='w-2/4 text-center bg-yellow-200 text-yellow-600 rounded border border-solid border-gray-600'>due</span>
                      <p className='w-2/4 text-left ml-2 whitespace-nowrap'>for 03d-12h</p>
                    </td>
                    <td className=''>
                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-success-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                      </button>

                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-neutral-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                        </svg>
                      </button>

                      <button type='button' className='mx-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-4 md:h-5 w-4 md:w-5 text-danger-1' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                          <path strokeLinecap='round' strokeLinejoin='round' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

          </div>

          <div className='right flex flex-col md:w-3/12'>

            <div className='popular-careers'>
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
                </tbody>
              </table>
            </div>

            <div className='popular-universities'>
              <h3 className='text-sm font-bold mb-3 mt-8'>
                Popular universities
              </h3>
              <table className='w-full mt-2'>
                <thead className='text-sm text-dark-2'>
                  <tr className='border-b border-solid border-collapse border-primary-1'>
                    <th className='w-3/4 text-left'>University</th>
                    <th className='w-1/4'>Visits/week</th>
                  </tr>
                </thead>
                <tbody className=''>
                  <tr className='border-b border-solid border-collapse border-primary-1'>
                    <td>
                      <h4 className='font-semibold text-sm'>1. Harvard</h4>
                      <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
                    </td>
                    <td className='text-right px-2'>
                      <h5 className='font-semibold'>0.95k</h5>
                      <p className='ml-9 px-1 bg-green-200 text-green-600 rounded-sm'>+125</p>
                    </td>
                  </tr>
                  <tr className='border-b border-solid border-collapse border-primary-1'>
                    <td>
                      <h4 className='font-semibold text-sm'>2. Oxford</h4>
                      <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
                    </td>
                    <td className='text-right px-2'>
                      <h5 className='font-semibold'>0.95k</h5>
                      <p className='ml-9 px-1 bg-red-200 text-red-600 rounded-sm'>-89</p>
                    </td>
                  </tr>
                  <tr className='border-b border-solid border-collapse border-primary-1'>
                    <td>
                      <h4 className='font-semibold text-sm'>3. Univ. od Toronto</h4>
                      <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
                    </td>
                    <td className='text-right px-2'>
                      <h5 className='font-semibold'>0.95k</h5>
                      <p className='ml-9 px-1 bg-yellow-100 text-yellow-600 rounded-sm'>+10</p>
                    </td>
                  </tr>
                  <tr className='border-b border-solid border-collapse border-primary-1'>
                    <td>
                      <h4 className='font-semibold text-sm'>4. Tsinghua</h4>
                      <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
                    </td>
                    <td className='text-right px-2'>
                      <h5 className='font-semibold'>0.95k</h5>
                      <p className='ml-9 px-1 bg-red-200 text-red-600 rounded-sm'>-100</p>

                    </td>
                  </tr>
                  <tr className='border-b border-solid border-collapse border-primary-1'>
                    <td>
                      <h4 className='font-semibold text-sm'>5. Univ. New South Wales</h4>
                      <small className='text-xs'>Lorem ipsum dolor, sit amet</small>
                    </td>
                    <td className='text-right px-2'>
                      <h5 className='font-semibold'>0.95k</h5>
                      <p className='ml-9 px-1 bg-yellow-100 text-yellow-600 rounded-sm'>+10</p>
                    </td>
                  </tr>
                  <tr className='border-b border-solid border-collapse border-primary-1'>
                    <td>
                      <h4 className='font-semibold text-sm'>6. National Univ. of Singapore</h4>
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

          </div>

        </div>

      </main>
    </>
  );
}

export default Dashboard;
