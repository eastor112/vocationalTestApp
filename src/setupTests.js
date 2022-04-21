// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
// import { Line } from 'react-chartjs-2';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));
