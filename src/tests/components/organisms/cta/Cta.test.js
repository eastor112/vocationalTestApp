import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cta from '../../../../components/organisms/cta/Cta';

describe('Testing Cta.test ', () => {
  test('should render Cta component', () => {
    render(
      <BrowserRouter>
        <Cta />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByLabelText('description-------')).toBeInTheDocument();
  });

  test('activate functions with buttons', () => {
    render(
      <BrowserRouter>
        <Cta />
      </BrowserRouter>,
    );

    const signupButton = screen.getByText('Vocational test');
    const searchButton = screen.getByText('Where to study');

    signupButton.click();
    searchButton.click();
  });
});
