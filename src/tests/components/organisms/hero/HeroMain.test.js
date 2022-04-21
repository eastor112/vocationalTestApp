import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeroMain from '../../../../components/organisms/hero/HeroMain';

describe('Testing HeroMain.js', () => {
  test('should render HeroMain component', () => {
    render(
      <BrowserRouter>
        <HeroMain />
      </BrowserRouter>,
    );

    const testButton = screen.getByRole('button', { name: 'Vocational test' });
    const searchButton = screen.getByRole('button', { name: 'Where to study' });

    testButton.click();
    searchButton.click();

    expect(testButton).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
