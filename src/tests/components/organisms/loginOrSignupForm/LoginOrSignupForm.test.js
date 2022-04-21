import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import LoginOrSignupForm from '../../../../components/organisms/loginOrSignupForm/LoginOrSignupForm';
import { store } from '../../../../context/store/store';

describe('testing loginOrSignupForm', () => {
  test('should render loginOrSignupForm', () => {
    const title = 'Login or Signup';

    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginOrSignupForm title={title} />
        </BrowserRouter>
      </Provider>,
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const button = screen.getByText(title);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should show a error message when inputs values are empty', async () => {
    const title = 'textButton';

    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginOrSignupForm title={title} />
        </BrowserRouter>
      </Provider>,
    );

    userEvent.click(screen.getByText(title));
    expect(screen.getByText('Error!')).toBeInTheDocument();
    expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText('Email'), 'test@gmail.c');
    userEvent.type(screen.getByPlaceholderText('Password'), '123456');

    userEvent.click(screen.getByText(title));
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });

  test('should show a error message when password is less than 6 characters', async () => {
    const title = 'textButton';
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginOrSignupForm title={title} />
        </BrowserRouter>
      </Provider>,
    );

    userEvent.type(screen.getByPlaceholderText('Email'), 'test@gmail.com');
    userEvent.type(screen.getByPlaceholderText('Password'), '12345');
    userEvent.click(screen.getByText(title));

    expect(screen.getByText('Password must be at least 6 characters')).toBeInTheDocument();
  });

  test('should not show a error message when email and password is valid', async () => {
    const title = 'textButton';
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginOrSignupForm title={title} />
        </BrowserRouter>
      </Provider>,
    );

    userEvent.type(screen.getByPlaceholderText('Email'), 'test@gmail.com');
    userEvent.type(screen.getByPlaceholderText('Password'), '123456');
    userEvent.click(screen.getByText(title));

    expect(screen.queryByText('Error!')).not.toBeInTheDocument();
  });
});
