import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Carousel from '../../../../components/organisms/carousel/Carousel';

describe('Testing Carousel component', () => {
  test('should render Carousel component ', () => {
    render(
      <BrowserRouter>
        <Carousel
          universities={[]}
          setPage={() => { }}
          totalPages={1}
        />
      </BrowserRouter>,
    );

    expect(screen.getByLabelText(/previous/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/next/i)).toBeInTheDocument();
  });
});
