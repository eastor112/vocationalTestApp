import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleFormChange = (e) => {
    const { name, value: inputValue, type, checked } = e.target;

    const value = type === 'checkbox' ? checked : inputValue;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return { formValues, handleInputChange, handleFormChange, setFormValues };
};
