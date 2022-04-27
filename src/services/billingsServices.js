const BASE_URL = process.env.REACT_APP_ENV === 'develop'
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PROD;

export const createBillingService = async (userId, testId, description, total, paymentMethod = 'PAYPAL', IVA = 0.19) => {
  const URL = `${BASE_URL}/api/billings`;

  const token = localStorage.getItem('token');

  const fees = (paymentMethod === 'PAYPAL') ? ((total * 0.0499) + 0.49).toFixed(2) : ((total * 0.029) + 0.3).toFixed(2);
  const taxes = ((total - fees) * IVA).toFixed(2);
  const amount = (total - fees - taxes).toFixed(2);

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user: userId,
      testId,
      description,
      amount,
      fees,
      taxes,
      paymentMethod,
      status: 'COMPLETED',
    }),
  };

  const billing = await fetch(URL, requestOptions);
  const billingData = await billing.json();

  return billingData;
};
