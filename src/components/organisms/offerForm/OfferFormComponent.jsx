import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'flowbite-react';
import { useForm } from '../../../hooks/useForm';
import { getAllCareersNames } from '../../../services/careersServices';
import InputFile from '../../atoms/input/InputFile';
import InputV2 from '../../atoms/input/InputV2';
import {
  createUniversityOfferAction,
  updateUniversityOfferAction,
} from '../../../context/actions/universities-actions';

const OfferFormComponent = ({ universityId, closeModal, creating, activeOffer }) => {
  const dispatch = useDispatch();
  const { isEditingModal } = useSelector((state) => state.universities);

  const [careers, setCareers] = useState([]);
  const [error, setError] = useState(null);

  const { formValues, handleFormChange } = useForm({
    name: creating ? '' : activeOffer.name,
    // eslint-disable-next-line no-nested-ternary
    duration: creating ? '' : (activeOffer.duration ? activeOffer.duration : 0),
    description: creating ? '' : activeOffer.description,
    url: creating ? '' : activeOffer.url,
    photo: creating ? '' : activeOffer.photo,
    // eslint-disable-next-line no-nested-ternary
    career: creating ? '' : (activeOffer.career ? activeOffer.career.name : ''),
  });

  const {
    name,
    duration,
    description,
    url,
    photo,
    career,
  } = formValues;

  useEffect(() => {
    getAllCareersNames()
      .then((data) => {
        setCareers(data);
      });
  }, []);

  useEffect(() => {
    if (!isEditingModal) {
      closeModal();
    }
  }, [isEditingModal]);

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

  const isValidForm = () => {
    if (name === '') {
      setError('Please enter a career name');
      return false;
    }

    setError(null);
    return true;
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      dispatch(createUniversityOfferAction(universityId, formValues));
    }
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      dispatch(updateUniversityOfferAction(activeOffer._id, formValues));
    }
  };

  return (
    <div>

      <h3 className='font-medium mb-4'>
        {
          creating ? 'Creating offer' : 'Updating offer'
        }
      </h3>

      <form action=''>
        {
          error
          && (
            <Alert color='red'>
              <span>
                <span className='font-medium mr-1'>
                  Error!
                </span>
                {error}
              </span>
            </Alert>
          )
        }

        <InputV2
          type='text'
          label='Name'
          name='name'
          value={name}
          onChange={handleFormChange}
          required
        />

        <div aria-label='description' className='relative top-2 mb-8'>
          <label
            htmlFor='description'
            className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
          >
            Description
          </label>
          <textarea
            id='description'
            rows='2'
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
                    <option key={uuidv4()} value={c}>
                      {c}
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
              src={photo !== '' ? photo : 'https://via.placeholder.com/150'}
              alt='profile-offer'
            />
          </figure>

          <InputFile name='profile-offer' onChange={handleFileChange} />
        </div>
        {
          creating ? (
            <button
              data-cy='create-offer-button'
              type='submit'
              className='mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={handleCreateSubmit}
            >
              Create
            </button>
          )
            : (
              <button
                data-cy='update-offer-button'
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
