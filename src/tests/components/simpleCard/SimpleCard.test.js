import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SimpleCard from '../../../components/organisms/simpleCard/SimpleCard';

describe('testing SimpleCard', () => {
  test('should render SimpleCard', () => {
    render(
      <BrowserRouter>
        <SimpleCard />
      </BrowserRouter>,
    );

    const button = screen.getByText(/see more/i);
    userEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
