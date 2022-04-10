import { render, screen } from '@testing-library/react';
import Button from '../../../../components/atoms/button/Button';

describe('Testing Button component', () => {
  it('should render primary medium button', () => {
    const confs = {
      text: 'button',
      type: 'primary',
      size: 'medium',
      outline: false,
      action: () => { },
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Button {...confs} />);

    const buttonElement = screen.getByText(/button/i);
    expect(buttonElement).not.toHaveClass('border');

    expect(buttonElement).toBeInTheDocument();
  });

  it('should render secondary small button', () => {
    const confs = {
      text: 'button',
      type: 'secondary',
      size: 'small',
      outline: true,
      action: () => { },
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Button {...confs} />);

    const buttonElement = screen.getByText(/button/i);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('border');
  });
});
