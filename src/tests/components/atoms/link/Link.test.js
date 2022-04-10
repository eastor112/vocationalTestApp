import { render, screen } from '@testing-library/react';
import Link from '../../../../components/atoms/link/Link';

describe('testing Link component', () => {
  it('should render Link component without underline and small', () => {
    const confs = {
      href: './',
      text: 'link',
      size: 'small',
      underlineOnHover: false,
      vertical: false,
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Link {...confs} />);

    const linkElement = screen.getByText(/link/i);

    expect(linkElement).toBeInTheDocument();
  });

  it('should render Link component with underline and small', () => {
    const confs = {
      href: './',
      text: 'link',
      size: 'medium',
      underlineOnHover: true,
      vertical: true,
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Link {...confs} />);

    const buttonElement = screen.getByText(/link/i);

    expect(buttonElement).toBeInTheDocument();
  });
});
