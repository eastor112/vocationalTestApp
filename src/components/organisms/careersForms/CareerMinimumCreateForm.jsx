import { AcademicCapIcon } from '@heroicons/react/outline';
import { Button } from 'flowbite-react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCareerAction } from '../../../context/actions/careers-actions';
import { useForm } from '../../../hooks/useForm';
import InputV2 from '../../atoms/input/InputV2';

const CareerMinimumCreateForm = ({ closeModal }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { activeCareer: { id } } = useSelector((state) => state.careers);

  const { formValues, handleFormChange } = useForm({
    name: '',
  });

  useEffect(() => {
    if (id) {
      navigate(`/dashboard/careers/${id}/main`);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCareerAction(formValues.name));
  };

  return (
    <div>
      <h3 className='font-medium flex gap-1'>
        <AcademicCapIcon className='w-6 h-6' />
        Create new career
      </h3>
      <form onSubmit={handleSubmit} className='mt-6'>
        <InputV2
          type='text'
          name='name'
          label='Career name'
          value={formValues.name}
          onChange={handleFormChange}
        />

        <div className='flex gap-5 items-center'>
          <Button
            type='submit'
          >
            Create
          </Button>

          <button type='button' onClick={() => closeModal()}>
            <span className='text-sm text-blue-500 hover:text-blue-600 hover:underline'>
              Cancel
            </span>
          </button>

        </div>
      </form>
    </div>
  );
};

CareerMinimumCreateForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default CareerMinimumCreateForm;
