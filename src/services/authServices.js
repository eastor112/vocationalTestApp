const BASE_URL = process.env.REACT_APP_ENV === 'develop' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD;

export const googleLoginValidationApi = async (credential) => {
  const URL = `${BASE_URL}/auth/google/login`;

  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      idToken: credential.tokenId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { token, user } = await response.json();

  return { token, ...user };
};

export const loginValidationApi = async (email, password) => {
  const URL = `${BASE_URL}/auth/local/login`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 400) {
    throw new Error('Incorrect email or password');
  }
  if (response.status === 500) {
    throw new Error('Server error');
  }

  const { token, user } = await response.json();

  return { token, ...user };
};

export const emailValidationApi = async (hash) => {
  const url = `${BASE_URL}/auth/local/login/activate/${hash}`;

  const response = await fetch(url);

  if (response.status === 400) {
    throw new Error('Incorrect hash');
  }

  const { token, user } = await response.json();

  return { token, ...user };
};
