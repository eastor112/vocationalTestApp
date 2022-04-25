/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import PropTypes from 'prop-types';

const Paypal = ({ product }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (details) => {
    // create billing in backend

    // status === 200
    setPaidFor(true);

    // refresh user premium status
    // alert the payment was successful
  };

  if (paidFor) {
    return (
      <div>
        <p>Thank you for your payment!</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>There was an error processing your payment. Please try again.</p>
      </div>
    );
  }

  return (
    <PayPalButtons
      style={{
        layout: 'horizontal',
        color: 'gold',
        tagline: false,
        height: 40,
      }}

      onClick={(data, actions) => {
        if (error) {
          setError(true);
          return actions.reject();
        }
        return actions.resolve();
      }}

      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                currency_code: 'USD',
                value: product.price,
              },
            },
          ],
        });
      }}

      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          console.log(details);
          handleApprove(details);
        });
      }}

      onCancel={(data, actions) => {
        console.log('========', data);
        console.log('========', actions);
      }}

      onError={(err) => {
        console.log(err);
        setError(err);
      }}

    />
  );
};

Paypal.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(Paypal);
