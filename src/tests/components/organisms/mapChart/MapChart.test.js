import { render, screen } from '@testing-library/react';
import MapChart from '../../../../components/organisms/mapChart/MapChart';

describe('Testing MapChart.jsx', () => {
  test('should render MapChart component ', () => {
    render(<MapChart />);

    expect(screen.getByLabelText('map-container')).toBeInTheDocument();
    expect(screen.getByText('Leaflet')).toBeInTheDocument();
  });
});
