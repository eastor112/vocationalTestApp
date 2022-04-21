import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

beforeAll(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
});

test('should render a navBar', () => {
  const element = screen.getByText(/home/i);

  expect(element).toBeInTheDocument();
});
