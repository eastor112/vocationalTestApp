import { render, screen } from '@testing-library/react';
import SearchBar from '../../../../components/organisms/searchBar/SearchBar';

describe('testing searchBar', () => {
  test('should render searchBar', () => {
    render(<SearchBar setUniversities={() => { }} />);

    const country = screen.getByText(/country:/i);
    const career = screen.getByText(/career:/i);

    expect(country).toBeInTheDocument();
    expect(career).toBeInTheDocument();
  });
});
