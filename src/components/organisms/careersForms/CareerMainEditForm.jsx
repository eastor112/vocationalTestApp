import { useDispatch, useSelector } from 'react-redux';
import { updateMainCareerAction } from '../../../context/actions/careers-actions';
import { useForm } from '../../../hooks/useForm';
import InputFile from '../../atoms/input/InputFile';
import InputV2 from '../../atoms/input/InputV2';

const CareerMainEditForm = () => {
  const { activeCareer } = useSelector((state) => state.careers);
  const dispatch = useDispatch();

  const { formValues, handleFormChange, setFormValues } = useForm({
    name: activeCareer.name,
    description: activeCareer.description,
  });

  const handleFileChange = (e) => {
    setFormValues({
      ...formValues,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMainCareerAction(activeCareer.id, formValues));
  };

  return (
    <div className='mt-6 '>
      <form
        encType='multipart/form-data'
        onSubmit={handleSubmit}
      >

        <InputV2
          type='text'
          label='Name'
          name='name'
          value={formValues.name}
          onChange={handleFormChange}
        />

        <div aria-label='career-description' className='relative top-1'>
          <label
            htmlFor='description'
            className='absolute -top-5 -left-2 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
          >
            Description
          </label>
          <textarea
            id='description'
            rows='3'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            placeholder='This career is about...'
            name='description'
            value={formValues.description}
            onChange={handleFormChange}
          />
        </div>

        <div className='mt-8 mb-10'>
          <div className='flex h-10 gap-2 items-center'>
            <figure className='h-10 max-w-[60px] overflow-hidden flex justify-center items-center'>
              <img
                src={activeCareer.photo ? activeCareer.photo : 'https://via.placeholder.com/150'}
                alt='profile'
              />
            </figure>

            <InputFile
              name='file'
              onChange={handleFileChange}
            />
          </div>
        </div>

        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default CareerMainEditForm;
