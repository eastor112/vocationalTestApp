import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../../../components/organisms/sidebar/Sidebar';

const mockStore = configureStore();

describe('testing Sidebar', () => {
  test('should render Sidebar', () => {
    const store = mockStore({ auth: {}, ui: {} });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar setWidth={() => { }} />
        </BrowserRouter>
      </Provider>,
    );

    const link = screen.getByText('General');

    expect(link).toBeInTheDocument();
  });

  test('should show when expand is true', () => {
    const store = mockStore({ auth: {}, ui: { expand: true } });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar setWidth={() => { }} />
        </BrowserRouter>
      </Provider>,
    );

    const button = screen.getByTestId('expand-button');
    const link = screen.getByText('General');

    button.click();

    expect(button).toBeInTheDocument();
    expect(link).not.toHaveClass('hidden');
  });
});
