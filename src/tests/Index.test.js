/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import ReactDOM from 'react-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import MainRouter from '../routers/MainRouter';

jest.mock('react-dom', () => ({ render: jest.fn() }));

const initialOptions = {
  'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
};

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../index');
    // eslint-disable-next-line max-len
    expect(ReactDOM.render)
      .toHaveBeenCalledWith(<React.StrictMode>
        <PayPalScriptProvider options={initialOptions}>
          <MainRouter />
        </PayPalScriptProvider>
      </React.StrictMode>, div);
  });
});
