import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Carousel from '../../../../components/organisms/carousel/Carousel';

describe('Testing Carousel component', () => {
  test('should render Carousel component ', () => {
    render(
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>,
    );

    expect(screen.getByText(/back/i)).toBeInTheDocument();
    expect(screen.getByText(/next/i)).toBeInTheDocument();
  });
});
