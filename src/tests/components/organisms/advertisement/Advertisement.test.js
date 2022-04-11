import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Advertisement from '../../../../components/organisms/advertisement/Advertisement';

describe('Testing Advertisement component', () => {
  test('should render advertisement component', () => {
    render(
      <BrowserRouter>
        <Advertisement />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  });
});
