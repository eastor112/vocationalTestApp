import { render, screen } from '@testing-library/react';
import PopularTop from '../../../../components/organisms/popularTop/PopularTop';

describe('Testing PopularTop.jsx', () => {
  test('should render PopularTop component ', () => {
    render(<PopularTop />);

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/recom\/week/i)).toBeInTheDocument();
  });
});
