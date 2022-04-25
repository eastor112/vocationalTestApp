import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

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
const CheckoutFormV2 = () => {
  const URL = `${BASE_URL}/api/checkout`;
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      console.log('Payment Method Created!', paymentMethod);

      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

    <div className='flex flex-col gap-2'>
      <form onSubmit={handleSubmit} className='m-auto text-center w-[390px]  overflow-hidden rounded shadow-lg bg-white pt-6 mb-2'>
        <CardElement options={cardElementOptions} />
        <br />
        <button
          type='submit'
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

export default CheckoutFormV2;
