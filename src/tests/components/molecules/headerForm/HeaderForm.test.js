import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderForm from '../../../../components/molecules/headerForm/HeaderForm';

describe('Testing HeaderForm component', () => {
  test('should render HeaderForm component with link to sign up page', () => {
    const confs = {
      title: 'Form Title',
      description: 'Sign up to see photos and videos from your friends.',
      login: true,
    };

    render(
      <BrowserRouter>
        <HeaderForm
          title={confs.title}
          description={confs.description}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText(confs.title)).toBeInTheDocument();
    expect(screen.getByText(confs.description)).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  test('should render HeaderForm component with link to login page', () => {
    const confs = {
      title: 'Form Title',
      description: 'Sign up to see photos and videos from your friends.',
      login: false,
    };

    render(
      <BrowserRouter>
        <HeaderForm
          title={confs.title}
          description={confs.description}
          login={confs.login}
        />
      </BrowserRouter>,
    );

    expect(screen.getByText(confs.title)).toBeInTheDocument();
    expect(screen.getByText(confs.description)).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
