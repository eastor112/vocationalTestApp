import { render, screen } from '@testing-library/react';
import GeneralStats from '../../../../components/organisms/generalStats/GeneralStats';

describe('Testing GeneralStats.js', () => {
  test('should render GeneralStats component', () => {
    render(<GeneralStats />);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
  });
});
