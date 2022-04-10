import { render, screen } from '@testing-library/react';
import SearchBar from '../../../components/organisms/searchBar/SearchBar';

describe('testing searchBar', () => {
  test('should render searchBar', () => {
    render(<SearchBar />);

    const country = screen.getByText(/country:/i);
    const career = screen.getByText(/career:/i);
    const orderBy = screen.getByText(/order by:/i);

    expect(country).toBeInTheDocument();
    expect(career).toBeInTheDocument();
    expect(orderBy).toBeInTheDocument();
  });
});
