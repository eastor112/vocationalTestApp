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

  return { token, user };
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

  return { token, user };
};

export const emailValidationApi = async (hash) => {
  const url = `${BASE_URL}/auth/local/login/activate/${hash}`;

  const response = await fetch(url);

  if (response.status === 400) {
    throw new Error('Incorrect hash');
  }

  const { token, user } = await response.json();

  return { token, user };
};

export const signUpStudentApi = async (email, password) => {
  const URL = `${BASE_URL}/api/users`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      role: 'STUDENT',
    }),
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 400) {
    throw new Error('Incorrect email or password');
  }
  if (response.status === 500) {
    throw new Error('Server error');
  }

  const user = await response.json();

  return user;
};

export const signUpInstitutionApi = async (email, password, name, country, phone, url) => {
  const URL = `${BASE_URL}/api/universities`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      address: {
        country,
      },
      url,
    }),
  };

  const response = await fetch(URL, requestOptions);

  if (response.status !== 201) {
    throw new Error('Error creating institution');
  }

  const university = await response.json();

  const URL2 = `${BASE_URL}/api/users`;

  const requestOptions2 = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      role: 'INSTITUTION',
      university: university.id,
      phone,
    }),
  };

  const response2 = await fetch(URL2, requestOptions2);

  if (response2.status !== 201) {
    throw new Error('Error creating user');
  }

  const user = await response2.json();

  return user;
};

export const refreshTokenApi = async (token) => {
  const URL = `${BASE_URL}/auth/local/login/validate`;

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 401) {
    localStorage.removeItem('token');
    throw new Error('Incorrect token');
  }
  if (response.status === 500) {
    throw new Error('Server error');
  }

  const { token: newToken, user } = await response.json();

  return { token: newToken, user };
};

export const updateUserApi = async (token, user) => {
  const URL = `${BASE_URL}/api/users/${user.uid}`;

  const userCopy = { ...user };

  if (user.role === 'ADMIN') {
    delete userCopy.role;
  }

  if (userCopy.file) {
    const formData = new FormData();
    formData.append('profile', userCopy.file);

    const requestOptions = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    };

    const response = await fetch(URL, requestOptions);

    if (response.status === 401) {
      throw new Error('Incorrect token');
    }
    if (response.status === 500) {
      throw new Error('Server error');
    }
  }

  delete userCopy.file;
  delete userCopy.profile;

  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userCopy),
  };

  const response = await fetch(URL, requestOptions);

  if (response.status === 401) {
    throw new Error('Incorrect token');
  }
  if (response.status === 500) {
    throw new Error('Server error');
  }

  const updatedUser = await response.json();

  return updatedUser;
};
