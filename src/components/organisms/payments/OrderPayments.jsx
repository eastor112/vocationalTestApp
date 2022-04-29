import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import PaypalButton from '../../atoms/paypalButton/PaypalButton';
import CheckoutFormV2 from '../checkoutForm/CheckoutFormV2';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const OrderPayments = ({ product, closeModal }) => {
  return (
    <div>

      <div>
        <span className='font-semibold'>
          You are buying:
        </span>
        <div
          className='border border-purple-500 p-3 rounded-lg'
        >
          <p className='font-bold'>{product.description}</p>
          <p>
            <span className='font-bold mr-1'>code:</span>
            {product.id}
          </p>
          <h2>
            <span className='font-bold mr-1'>price:</span>
            $
            {product.price}
          </h2>

        </div>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutFormV2 testId={product.id} closeModal={closeModal} />
      </Elements>
      <PaypalButton
        product={product}
        closeModal={closeModal}
      />
    </div>
  );
};

OrderPayments.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default OrderPayments;
