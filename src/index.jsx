import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from 'react-modal';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import reportWebVitals from './reportWebVitals';
import 'flowbite';
import MainRouter from './routers/MainRouter';

Modal.setAppElement('#root');

const initialOptions = {
  'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture',
};

ReactDOM.render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <MainRouter />
    </PayPalScriptProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
