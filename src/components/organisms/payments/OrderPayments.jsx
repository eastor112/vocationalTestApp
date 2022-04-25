import PaypalButton from '../../atoms/paypalButton/PaypalButton';

const OrderPayments = () => {
  return (
    <PaypalButton product={{
      description: 'Test premium',
      price: 15,
    }}
    />
  );
};

export default OrderPayments;
