import React from 'react';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';

const UniversityForm = () => {
  return (
    <form action='' className=' md:grid grid-cols-3 gap-8'>
      <Input type='text' name='University' />
      <Input type='text' name='Mission' />
      <Input type='text' name='Vision' />
      <Input type='text' name='Country' />
      <Input type='text' name='Department' />
      <Input type='text' name='City' />
      <Input type='text' name='How to apply' />
      <Input type='text' name='Other important information' />
      <Button text='Academic offer' />
      <Button text='Save' />
    </form>
  );
};

export default UniversityForm;
