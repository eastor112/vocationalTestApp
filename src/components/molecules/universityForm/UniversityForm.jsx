import React from 'react';
import Input from '../../atoms/input/Input';

const UniversityForm = () => {
  return (
    <form action=''>
      <Input type='text' name='University name' />
      <Input type='text' name='mission' />
      <Input type='text' name='vision' />
      <Input type='text' name='How to apply' />
      <Input type='text' name='Country' />
      <Input type='text' name='Department' />
      <Input type='text' name='City' />
      <Input type='text' name='Other important information' />
    </form>
  );
};

export default UniversityForm;
