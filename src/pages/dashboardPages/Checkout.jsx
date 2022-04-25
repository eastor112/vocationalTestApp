import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/organisms/checkoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
const Checkout = () => {
  return (
    <main className='bg-light-1 h-screen w-screen'>
      <div className='flex justify-center pb-20 text'>
        <h1 className='text-6xl'>Checkout</h1>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
        <div className=' h-[750px] flex items-center justify-center'>
          <img src={require('../../assets/credit.png')} alt='credit' />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
