import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../context/store/store';

beforeAll(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ,
    </Provider>,
  );
});

test('should render a navBar', () => {
  const element = screen.getByText(/home/i);

  expect(element).toBeInTheDocument();
});
