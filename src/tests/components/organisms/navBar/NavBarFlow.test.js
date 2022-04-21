import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import NavBarFlow from '../../../../components/organisms/navBar/NavBarFlow';

beforeAll(() => {

});

describe('testing NavBarFlow', () => {
  test('should render a home, about, and contact links', () => {
    const wraper = render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const home = wraper.getByText(/home/i);
    const about = wraper.getByText(/about/i);
    const contact = wraper.getByText(/contact/i);

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });

  test('should render a text Logo', () => {
    render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const element = screen.getByText(/My Future, My Choice/i);

    expect(element).toBeInTheDocument();
  });

  test('should open dropdown menu', async () => {
    render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const element = screen.getByText(/Open user menu/i);

    await act(async () => {
      element.parentNode.click();
    });
    const dropdown = screen.getByTestId('user-menu');

    expect(dropdown).toHaveStyle('display: block');
    expect(dropdown).toHaveClass('block');
  });

  test('should open main menu', async () => {
    render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const element = screen.getByText(/Open main menu/i);

    await act(async () => {
      element.parentNode.click();
    });
    const menu = screen.getByTestId('main-menu');

    expect(menu).not.toHaveClass('hidden');
  });

  test('should close main menu when click home navlink', async () => {
    render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const element = screen.getByText(/Open main menu/i);

    await act(async () => {
      element.parentNode.click();
    });

    const menu = screen.getByTestId('main-menu');

    expect(menu).not.toHaveClass('hidden');

    const navLink = screen.getByText(/home/i);

    await act(async () => {
      navLink.click();
    });

    expect(menu).toHaveClass('hidden');
  });

  test('should close main menu when click about navlink', async () => {
    render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const element = screen.getByText(/Open main menu/i);

    await act(async () => {
      element.parentNode.click();
    });

    const menu = screen.getByTestId('main-menu');

    expect(menu).not.toHaveClass('hidden');

    const navLink = screen.getByText(/about/i);

    await act(async () => {
      navLink.click();
    });

    expect(menu).toHaveClass('hidden');
  });

  test('should close main menu when click contact navlink', async () => {
    render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const element = screen.getByText(/Open main menu/i);

    await act(async () => {
      element.parentNode.click();
    });

    const menu = screen.getByTestId('main-menu');

    expect(menu).not.toHaveClass('hidden');

    const navLink = screen.getByText(/contact/i);

    await act(async () => {
      navLink.click();
    });

    expect(menu).toHaveClass('hidden');
  });

  test('should close user menu when resize window', async () => {
    render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const element = screen.getByText(/Open user menu/i);

    await act(async () => {
      element.parentNode.click();
    });

    const dropdown = screen.getByTestId('user-menu');

    expect(dropdown).toHaveClass('block');

    await act(async () => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(dropdown).toHaveClass('hidden');
  });

  test('should got to signup page', async () => {
    render(
      <BrowserRouter>
        <NavBarFlow />
      </BrowserRouter>,
    );

    const element = screen.getByText(/sign up/i);

    await act(async () => {
      element.click();
    });

    const signupPage = screen.getByText(/Sign up/i);

    expect(signupPage).toBeInTheDocument();
  });
});
