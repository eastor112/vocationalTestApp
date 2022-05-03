import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useForm } from '../../../hooks/useForm';
import { getAllCareersNames } from '../../../services/careersServices';
import InputFile from '../../atoms/input/InputFile';
import InputV2 from '../../atoms/input/InputV2';
import { createOffer } from '../../../services/offersServices';

// university
// career
const OfferFormComponent = ({ universityId, closeModal, creating, activeOffer }) => {
  const [careers, setCareers] = useState([]);

  const { formValues, handleFormChange } = useForm({
    name: creating ? '' : activeOffer.name,
    duration: creating ? '' : activeOffer.duration,
    description: creating ? '' : activeOffer.description,
    url: creating ? '' : activeOffer.url,
    photo: creating ? '' : activeOffer.photo,
    career: creating ? '' : activeOffer.career,
  });

  const {
    name,
    duration,
    description,
    url,
    career,
  } = formValues;

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

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Updating...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    createOffer(universityId, formValues)
      .then(() => {
        Swal.close();
        closeModal();
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          html: err.message,
          confirmButtonText: 'Ok',
        }).then(() => {
          Swal.close();
          closeModal();
        });
      });
  };

  const handleUpdateSubmit = (e) => {

  };

  return (
    <div>

      <h3 className='font-medium mb-4'>
        {
          creating ? 'Creating offer' : 'Updating offer'
        }
      </h3>

      <form action=''>
        <InputV2
          type='text'
          label='Name'
          name='name'
          value={name}
          onChange={handleFormChange}
        />

        <div aria-label='description' className='relative top-2 mb-8'>
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
            value={description}
            onChange={handleFormChange}
          />
        </div>

        <InputV2
          type='url'
          label='More info link'
          name='url'
          value={url}
          onChange={handleFormChange}
        />

        <div className='grid xl:grid-cols-2 xl:gap-6 pt-2'>
          <InputV2
            type='number'
            label='Semesters'
            name='duration'
            value={duration}
            onChange={handleFormChange}
          />

          <div aria-label='career-select' className='flex flex-col relative mb-10 top-2'>
            <label
              htmlFor='city'
              className='absolute -top-5 -left-1 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
            >
              Career
            </label>
            <select
              data-cy='career-select'
              id='career'
              className='w-full ml-1 mt-2 lg:mt-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='career'
              value={career}
              onChange={handleFormChange}
            >
              <option key={uuidv4()} value=''> Select a career </option>
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
          </div>
        </div>

        <div aria-label='profile-offer' className='flex h-10 gap-2 relative'>
          <label
            htmlFor='profile-offer'
            className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
          >
            Profile career
          </label>

          <figure className='h-10 w-10 overflow-hidden flex justify-center items-center'>
            <img
              src={formValues.profile ? formValues.profile : 'https://via.placeholder.com/150'}
              alt='profile-offer'
            />
          </figure>

          <InputFile name='profile-offer' onChange={handleFileChange} />
        </div>
        {
          creating ? (
            <button
              type='submit'
              className='mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={handleCreateSubmit}
            >
              Create
            </button>
          )
            : (
              <button
                type='submit'
                className='mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={handleUpdateSubmit}
              >
                Update
              </button>
            )

        }
      </form>
    </div>
  );
};

OfferFormComponent.defaultProps = {
  closeModal: () => { },
  creating: false,

};

OfferFormComponent.propTypes = {
  universityId: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
  creating: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  activeOffer: PropTypes.object.isRequired,
};

export default OfferFormComponent;
