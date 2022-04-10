import { render, screen } from '@testing-library/react';
import Input from '../../../../components/atoms/input/Input';

describe('testing Input component', () => {
  test('should ', () => {
    const confs = {
      type: 'text',
      name: 'email',
    };

    render(<Input type={confs.type} name={confs.name} />);

    const inputElement = screen.getByLabelText(confs.name);

    expect(inputElement).toBeInTheDocument();
  });
});
