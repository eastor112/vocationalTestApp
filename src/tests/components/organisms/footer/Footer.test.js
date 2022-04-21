import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../../../components/organisms/footer/Footer';

describe('Testing Footer.test.js', () => {
  test('should render Footer component', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4);
  });
});
