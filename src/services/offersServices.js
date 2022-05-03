const BASE_URL = process.env.REACT_APP_ENV === 'develop'
  ? process.env.REACT_APP_API_URL_DEV
  : process.env.REACT_APP_API_URL_PROD;

export const createOffer = async (universityId, offer) => {
  const URL = `${BASE_URL}/api/offers`;
  const token = localStorage.getItem('token');

  const offerCopy = { ...offer };

  delete offerCopy.file;
  offerCopy.university = universityId;

  try {
    const response1 = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(offerCopy),
    });

    if (response1.status !== 201) {
      return Promise.reject(new Error('Error creating offer'));
    }

    const createdOffer = await response1.json();

    if (offer.file) {
      const formData = new FormData();
      formData.append('photo', offer.file);

      const response2 = await fetch(`${URL}/${createdOffer.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response2.status !== 200) {
        return Promise.reject(new Error('Error uploading photo'));
      }

      const updatedOffer = await response2.json();

      return updatedOffer;
    }

    return createdOffer;
  } catch (error) {
    return error;
  }
};

export const destroyOffer = async (offerId) => {
  const URL = `${BASE_URL}/api/offers/${offerId}/destroy`;
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(URL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 204) {
      return Promise.reject(new Error('Error deleting offer'));
    }

    return response;
  } catch (error) {
    return error;
  }
};

export const updateOffer = async (offerId, offer) => {

};
