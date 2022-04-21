import { render, screen } from '@testing-library/react';
import UniversityForm from '../../../../components/molecules/universityForm/UniversityForm';

describe('Testing on UniversityForm component', () => {
  test('should render UniversityForm component', () => {
    render(<UniversityForm />);

    expect(screen.getByLabelText(/university/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mission/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/vision/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/department/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/how to apply/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/other important information/i)).toBeInTheDocument();
  });
});
