import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { universitySocialMediaAction } from '../../../context/actions/universities-actions';
import { useForm } from '../../../hooks/useForm';
import InputV2 from '../../atoms/input/InputV2';

const UniversitySocialMedia = ({ universityId, socialMedia }) => {
  const dispatch = useDispatch();

  const { formValues, handleFormChange } = useForm({
    facebook: socialMedia.facebook,
    twitter: socialMedia.twitter,
    instagram: socialMedia.instagram,
    linkedIn: socialMedia.linkedIn,
  });

  const {
    facebook,
    twitter,
    instagram,
    linkedIn,
  } = formValues;

  const handleUpdateSocialMedia = () => {
    dispatch(universitySocialMediaAction(universityId, formValues));
  };

  return (
    <form className='mt-6'>
      <InputV2
        type='url'
        name='facebook'
        label='Facebook'
        value={facebook}
        onChange={handleFormChange}
      />

      <InputV2
        type='url'
        name='linkedIn'
        label='LinkedIn'
        value={linkedIn}
        onChange={handleFormChange}
      />

      <InputV2
        type='url'
        name='twitter'
        label='Twitter'
        value={twitter}
        onChange={handleFormChange}
      />

      <InputV2
        type='url'
        name='instagram'
        label='Instagram'
        value={instagram}
        onChange={handleFormChange}
      />

      <button
        data-cy='update-social-media'
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={handleUpdateSocialMedia}
      >
        Update
      </button>

    </form>
  );
};

UniversitySocialMedia.propTypes = {
  universityId: PropTypes.string.isRequired,
  socialMedia: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string,
    linkedIn: PropTypes.string,
  }).isRequired,
};

export default UniversitySocialMedia;
