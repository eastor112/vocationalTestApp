import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modal from 'react-modal';
import reportWebVitals from './reportWebVitals';
import 'flowbite';
import MainRouter from './routers/MainRouter';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
