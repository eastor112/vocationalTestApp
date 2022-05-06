import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../../../../components/organisms/sidebar/Sidebar';
import { store } from '../../../../context/store/store';

describe('testing Sidebar', () => {
  test('should render Sidebar', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar setWidth={() => { }} />
        </BrowserRouter>
      </Provider>,
    );

    const link = screen.getByLabelText('general-student');

    expect(link).toBeInTheDocument();
  });

  test('should show when expand is true', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar setWidth={() => { }} />
        </BrowserRouter>
      </Provider>,
    );

    const button = screen.getByTestId('expand-button');
    const link = screen.getByLabelText('general-link');

    button.click();

    expect(button).toBeInTheDocument();
    expect(link).not.toHaveClass('hidden');
  });
});
