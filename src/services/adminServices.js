const BASE_URL = process.env.REACT_APP_ENV === 'develop'
  ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

export const getTotalBalance = async () => {
  const url = `${BASE_URL}/api/admin/balance`;
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return Promise.reject(response);
  }

  const totalsJson = await response.json();

  return totalsJson;
};

export const getBalanceLastThirtyDays = async () => {
  const url = `${BASE_URL}/api/admin/balance/day-by-day`;
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return Promise.reject(response);
  }

  const totalsJson = await response.json();

  const dates = totalsJson.map((item) => item.date);
  const utilities = totalsJson.map((item) => Number(item.utility));
  const taxes = totalsJson.map((item) => Number(item.taxes));
  const fees = totalsJson.map((item) => Number(item.fees));

  return {
    labels: dates.reverse(),
    utilities: utilities.reverse(),
    taxes: taxes.reverse(),
    fees: fees.reverse(),
  };
};

export const getAppStats = async () => {
  const url = `${BASE_URL}/api/admin/stats`;
  const token = localStorage.getItem('token');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (response.status !== 200) {
    return Promise.reject(response);
  }

  const statsJson = await response.json();

  return statsJson;
};
