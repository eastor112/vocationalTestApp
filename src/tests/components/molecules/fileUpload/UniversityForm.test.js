import { render, screen } from '@testing-library/react';
import FileUpload from '../../../../components/molecules/fileUpload/FileUpload';

describe('testing FileUpload component', () => {
  test('should render the FileUpload component', () => {
    render(<FileUpload />);

    expect(screen.getByText(/upload profile/i)).toBeInTheDocument();
    expect(screen.getByTestId('file-upload')).toBeInTheDocument();
  });
});
