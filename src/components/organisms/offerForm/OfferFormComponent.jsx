import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from '../../../hooks/useForm';
import { getAllCareersNames } from '../../../services/careersServices';
import InputFile from '../../atoms/input/InputFile';
import InputV2 from '../../atoms/input/InputV2';

// university
// career
const OfferFormComponent = () => {
  const [careers, setCareers] = useState([]);

  const { formValues, handleFormChange, setFormValues } = useForm({});

  useEffect(() => {
    getAllCareersNames()
      .then((data) => {
        setCareers(data);
      });
  }, []);

  const handleFileChange = (ev) => {
    const file = ev.target.files[0];

    const e = {
      target: {
        name: 'file',
        value: file,
      },
    };
    handleFormChange(e);
  };

  return (
    <div>
      <InputV2
        type='text'
        name='name'
        label='Name'
      />

      <InputV2
        type='number'
        name='duration'
        label='Semesters'
      />

      <div aria-label='description' className='relative'>
        <label
          htmlFor='description'
          className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
        >
          Description
        </label>
        <textarea
          id='mission'
          rows='3'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='...'
          name='description'
        />
      </div>

      <InputV2
        type='url'
        name='url'
        label='More info link'
      />

      <div aria-label='logo-file' className='flex h-10 gap-2 relative'>
        <label
          htmlFor='logo-file'
          className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
        >
          Logo
        </label>
        <figure className='h-10 w-10 overflow-hidden flex justify-center items-center'>
          {/* <img
            src={formValues.profile ? formValues.profile : 'https://via.placeholder.com/150'}
            alt='profile'
          /> */}
        </figure>

        <InputFile name='logo-file' onChange={handleFileChange} />
      </div>

      <label
        htmlFor='career'
        className='block lg:flex items-center text-sm font-medium text-gray-900 dark:text-gray-400'
      >
        Career:
        <select
          data-cy='career-select'
          id='career'
          className='ml-1 mt-2 lg:mt-0 w-32 sm:w-36 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          name='career'
          value={formValues.career}
          onChange={handleFormChange}
        >

          <option key={uuidv4()} value=''> none </option>
          {
            careers.map((c) => {
              return (
                <option key={uuidv4()} value={c.name}>
                  {c.name}
                </option>
              );
            })
          }
        </select>
      </label>

    </div>
  );
};

export default OfferFormComponent;
