/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { fetchBillingAction, setIsPurchasedAction } from '../../../context/actions/billings-actions';

const BASE_URL = process.env.REACT_APP_ENV === 'develop' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;
const inputStyle = {
  iconColor: '#147a0b',
  color: '#1B1B1B',
  fontWeight: '500',
  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  fontSize: '16px',
  fontSmoothing: 'antialiased',
  ':-webkit-autofill': {
    color: '#13a99f',
  },
  '::placeholder': {
    color: '#919191',
  },
};
const cardElementOptions = {
  style: {
    base: inputStyle,
    invalid: {
      color: '#fa755a',
      fontSize: 'fa755a',
    },
  },
};

const URL = `${BASE_URL}/api/checkout`;

const CheckoutFormV2 = ({ testId, closeModal }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const token = localStorage.getItem('token');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ paymentMethod, amount: 1500 }),
      };

      Swal.fire({
        title: 'Purchasing this Test...',
        html: 'Wait a moment...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await fetch(URL, payload);
      const body = await response.json();
      Swal.close();
      const paypalAmount = Number(body.amount) / 100;
      dispatch(
        fetchBillingAction(testId, body.description, paypalAmount, 'CREDIT CARD'),
      );
      dispatch(setIsPurchasedAction(true));
      closeModal();
      elements.getElement(CardElement).clear();
    } else {
      console.log('Payment Method Error!', error);
    }
  };
  return (

    <div className='flex flex-col gap-2'>
      <form className='text-center overflow-hidden rounded shadow-lg bg-white pt-6 mb-2'>
        <div id='stripeContainer'>
          <CardElement options={cardElementOptions} />
        </div>
        <br />
        <button
          type='button'
          onClick={handleSubmit}
          id='pay-button'
          className='w-full flex justify-center items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-2.5 text-center'
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' />
            <path fillRule='evenodd' d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z' clipRule='evenodd' />
          </svg>
          Pay by credit card
        </button>
      </form>
    </div>

  );
};

CheckoutFormV2.propTypes = {
  testId: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CheckoutFormV2;
