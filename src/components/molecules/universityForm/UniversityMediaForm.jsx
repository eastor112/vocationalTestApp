import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from '../../../hooks/useForm';
import { deleteUniversityImages, updateMediaUniversity } from '../../../services/universitiesServices';
import InputFile from '../../atoms/input/InputFile';

const UniversityMediaForm = ({ university }) => {
  const { formValues, handleFormChange } = useForm({
    logo: '',
    campus: [],
  });

  const handleFileChange = (ev) => {
    const file = ev.target.files[0];

    const { name } = ev.target;

    const e = {
      target: {
        name,
        value: file,
      },
    };
    handleFormChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateMediaUniversity(university.id, formValues)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteImage = (target, img) => {
    deleteUniversityImages(university.id, target, img)
      .then(() => { console.log('eliminado'); })
      .catch((err) => { console.log(err); });
  };

  return (
    <form className='flex flex-col gap-8 mt-10'>

      {
        (university.logo && university.logo !== '')
        && (
          <div className='w-full'>
            <div className='relative h-20 w-fit'>
              <img className='h-20' src={university.logo} alt='' />
              <button
                type='button'
                className='absolute -top-1 -right-1 w-4 h-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full flex items-center justify-center'
                onClick={() => handleDeleteImage('logo', university.logo)}
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-3 w-3' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
        )
      }

      <div aria-label='logo-file' className='flex h-10 gap-2 relative'>
        <label
          htmlFor='logo-file'
          className='absolute -top-5 left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
        >
          Logo
        </label>

        <InputFile
          name='logo'
          onChange={handleFileChange}
          multiple
        />
      </div>

      <div className='flex flex-wrap gap-2'>
        {
          university.campus.map((campus) => (
            <div key={uuidv4()} className='relative'>
              <figure className='h-12 overflow-hidden'>
                <img className='h-full' src={campus} alt='' />
              </figure>
              <button
                type='button'
                className='absolute -top-1 -right-1 w-4 h-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full flex items-center justify-center'
                onClick={() => handleDeleteImage('campus', campus)}
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-3 w-3' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          ))
        }

      </div>

      <div aria-label='campus-files' className='flex h-10 gap-2 relative'>
        <label
          htmlFor='campus-files'
          className='absolute -top-5 -left-1.5 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
        >
          Campus images
        </label>

        <InputFile
          name='campus'
          onChange={handleFileChange}
          multiple
        />
      </div>

      <div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={handleSubmit}
        >
          Update
        </button>
      </div>
    </form>
  );
};

UniversityMediaForm.propTypes = {
  university: PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string,
    campus: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    mission: PropTypes.string,
    vision: PropTypes.string,
    address: PropTypes.shape({
      country: PropTypes.string,
      city: PropTypes.string,
    }),
    ranking: PropTypes.shape({
      national: PropTypes.number,
      worldwide: PropTypes.number,
    }),
    url: PropTypes.string,
  }).isRequired,
};

export default UniversityMediaForm;
