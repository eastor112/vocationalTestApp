/* eslint-disable no-console */
import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CheckoutCard from '../simpleCard/CheckoutCard';

const BASE_URL = process.env.REACT_APP_ENV === 'develop' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;
const inputStyle = {
  iconColor: '#A6A6A6',
  color: '#1B1B1B',
  fontWeight: '500',
  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  fontSize: '16px',
  fontSmoothing: 'antialiased',
  ':-webkit-autofill': {
    color: '#A6A6A6',
  },
  '::placeholder': {
    color: '#A6A6A6',
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
const CheckoutForm = () => {
  const URL = `${BASE_URL}/api/checkout`;
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
      console.log('Payment Method Created!', paymentMethod);
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json');

      const payload = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({ paymentMethod, amount: 1500 }),
      };
      const response = await fetch(URL, payload);
      const body = await response.json();
      console.log('response from server:', body);
      elements.getElement(CardElement).clear();
    } else {
      console.log('Payment Method Error!', error);
    }
  };
  return (

    <div className='flex flex-col justify-center items-center gap-10'>
      <CheckoutCard />
      <form onSubmit={handleSubmit} className='m-auto text-center pr-20 w-[390px]  border border-primary-1 overflow-hidden rounded-lg shadow-lg bg-white p-12'>
        <h3 className='pb-10'>Payment Details</h3>
        <CardElement options={cardElementOptions} />
        <br />
        <button type='submit' className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
          <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            Submit
          </span>
        </button>
      </form>
    </div>

  );
};

export default CheckoutForm;
