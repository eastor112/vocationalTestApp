const API_URL = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}/auth/google/login`;

export const googleLoginValidationApi = async (credential) => {
  const response = await fetch(API_URL, {
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
