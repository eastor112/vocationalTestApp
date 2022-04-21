import { render, screen } from '@testing-library/react';
import LatePayments from '../../../../components/organisms/latePayments/LatePayments';

describe('Testing LatePayments.jsx', () => {
  test('should render LatePayments component ', () => {
    render(<LatePayments />);

    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/id/i)).toBeInTheDocument();
    expect(screen.getByText(/payment status/i)).toBeInTheDocument();
    expect(screen.getByText(/user/i)).toBeInTheDocument();
    expect(screen.getByText(/actions/i)).toBeInTheDocument();
  });
});
