/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useState, useEffect } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBillingAction, setIsPurchasedAction } from '../../../context/actions/billings-actions';

const Paypal = ({ product, closeModal }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user: { purchasedTests } } = useSelector((state) => state.auth);

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (purchasedTests.includes(product.id)) {
      setPaidFor(true);
      closeModal();
      navigate(`/dashboard/tests/${product.id}`);
    }
  }, [purchasedTests]);

  const handleApprove = (details) => {
    dispatch(fetchBillingAction(
      product.id,
      details.purchase_units[0].description,
      details.purchase_units[0].amount.value,
      'PAYPAL',
    ));

    dispatch(setIsPurchasedAction(true));
    closeModal();
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
          handleApprove(details);
        });
      }}

      onCancel={(data, actions) => {

      }}

      onError={(err) => {
        console.log(err);
        setError(err);
      }}

    />
  );
};

Paypal.defaultProps = {
  closeModal: () => { },
};

Paypal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  closeModal: PropTypes.func,
};

export default React.memo(Paypal);
