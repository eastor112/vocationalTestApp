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
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
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

      <main className={`${width === 64 ? 'pt-10 pr-10 ml-72' : ' pt-10 pr-10 pl-24'}`}>

        <div className='general-stats'>
          <div>
            <div>
              <img src='https://via.placeholder.com/100?text=icon' alt='stats' />
            </div>
            <div>
              <h3>1 478 286</h3>
              <p>Total visits</p>
              <p>
                <span>4.07%</span>
                Last month
              </p>
            </div>
          </div>

          <div>
            <div>
              <img src='https://via.placeholder.com/100?text=icon' alt='stats' />
            </div>
            <div>
              <h3>478 520</h3>
              <p>Total vocational test</p>
              <p>
                <span>0.24%</span>
                Last month
              </p>
            </div>
          </div>

          <div>
            <div>
              <img src='https://via.placeholder.com/100?text=icon' alt='stats' />
            </div>
            <div>
              <h3>1 872</h3>
              <p>Total subscriptions</p>
              <p>
                <span>1.64%</span>
                Last month
              </p>
            </div>
          </div>

          <div>
            <div>
              <img src='https://via.placeholder.com/100?text=icon' alt='stats' />
            </div>
            <div>
              <h3>5 367</h3>
              <p>Total subscriptions</p>
              <p>
                <span>0.00%</span>
                Last month
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className='left'>
            <div className='graph'>
              <Line options={options} data={data} />
            </div>
            <div className='late-payments'>
              <h3>Subscriptors with late Payments</h3>
              <table className='border border-solid w-full'>
                <thead>
                  <tr>
                    <th className='px-5'>user id</th>
                    <th className='px-5'>Name</th>
                    <th className='px-5'>Email</th>
                    <th className='px-5'>Payment status</th>
                    <th className='px-5'>Payment late days</th>
                    <th className='px-5'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{(Math.random() * 45000).toFixed(0)}</td>
                    <td>{faker.name.findName()}</td>
                    <td>{faker.internet.email()}</td>
                    <td>overdue</td>
                    <td>3 days 12hours</td>
                    <td>sdfs</td>
                  </tr>
                  <tr>
                    <td>{(Math.random() * 45000).toFixed(0)}</td>
                    <td>{faker.name.findName()}</td>
                    <td>{faker.internet.email()}</td>
                    <td>overdue</td>
                    <td>3 days 12hours</td>
                    <td>sdfs</td>
                  </tr>
                  <tr>
                    <td>{(Math.random() * 45000).toFixed(0)}</td>
                    <td>{faker.name.findName()}</td>
                    <td>{faker.internet.email()}</td>
                    <td>overdue</td>
                    <td>3 days 12hours</td>
                    <td>sdfs</td>
                  </tr>
                  <tr>
                    <td>{(Math.random() * 45000).toFixed(0)}</td>
                    <td>{faker.name.findName()}</td>
                    <td>{faker.internet.email()}</td>
                    <td>overdue</td>
                    <td>3 days 12hours</td>
                    <td>sdfs</td>
                  </tr>
                  <tr>
                    <td>{(Math.random() * 45000).toFixed(0)}</td>
                    <td>{faker.name.findName()}</td>
                    <td>{faker.internet.email()}</td>
                    <td>overdue</td>
                    <td>3 days 12hours</td>
                    <td>sdfs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum
            quod nihil, veritatis dicta aliquid nam aspernatur accusantium repudiandae
            ipsa consectetur, sint vitae minima officia fugit repellat quis illo voluptatum.
          </div>
        </div>

      </main>
    </>
  );
}

export default Dashboard;
