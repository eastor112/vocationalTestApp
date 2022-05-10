import React from 'react';
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
import PropTypes from 'prop-types';

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

const LineGraph = ({ dataGraph }) => {
  const totals = dataGraph.utilities?.map((utility, i) => {
    return utility + dataGraph.fees[i] + dataGraph.taxes[i];
  });

  const data = {
    labels: dataGraph.labels,
    datasets: [
      {
        label: 'Total',
        data: totals,
        borderColor: 'rgb(39, 57, 194)',
        backgroundColor: 'rgba(39, 57, 194, 0.2)',
      },
      {
        label: 'Utilities',
        data: dataGraph.utilities,
        borderColor: 'rgb(70, 194, 39)',
        backgroundColor: 'rgba(70, 194, 39, 0.2)',
      },
      {
        label: 'Fees',
        data: dataGraph.fees,
        borderColor: 'rgb(235, 223, 53)',
        backgroundColor: 'rgba(235, 223, 53, 0.5)',
      },
      {
        label: 'Taxes',
        data: dataGraph.taxes,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },

    ],
  };

  return (
    <div aria-label='graph-container' className='graph h-80'>
      <Line options={options} data={data} />
    </div>
  );
};

LineGraph.propTypes = {
  dataGraph: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    utilities: PropTypes.arrayOf(PropTypes.number),
    taxes: PropTypes.arrayOf(PropTypes.number),
    fees: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default LineGraph;
