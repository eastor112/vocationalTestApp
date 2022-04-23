import PropTypes from 'prop-types';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {

    legend: {
      position: 'right',
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
      },
    },

    datalabels: {
      color: '#000',
      font: {
        size: 10,
      },
      formatter: (value) => {
        return `${value}%`;
      },
    },

    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  },
};

const DoughnutChart = ({ data }) => {
  return <Doughnut data={data} options={options} />;
};

DoughnutChart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.number),
        backgroundColor: PropTypes.arrayOf(PropTypes.string),
        borderColor: PropTypes.arrayOf(PropTypes.string),
        borderWidth: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default DoughnutChart;
