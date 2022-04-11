import { render, screen } from '@testing-library/react';
import LineGraph from '../../../../components/organisms/lineGraph/LineGraph';
import 'jest-canvas-mock';

describe('Testing LineGraph.jsx', () => {
  test('should render LineGraph component ', () => {
    render(<LineGraph />);

    expect(screen.getByLabelText('graph-container')).toBeInTheDocument();
  });
});
