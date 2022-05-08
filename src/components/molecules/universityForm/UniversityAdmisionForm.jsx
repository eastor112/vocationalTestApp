/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { updateUniversityProcessAction } from '../../../context/actions/universities-actions';
import DragAndDropList from '../../organisms/dragAndDropList/DragAndDropList';

const UniversityAdmisionForm = ({ universityId, process }) => {
  const dispatch = useDispatch();
  const [steps, setSteps] = useState(process);

  const handleUpdate = () => {
    dispatch(updateUniversityProcessAction(universityId, steps));
  };

  return (
    <div className='mt-5'>
      <DragAndDropList
        label='Steps'
        arrayItems={steps}
        setParentArray={setSteps}
      />

      <button
        data-cy='update-admission-process'
        type='button'
        className='mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={handleUpdate}
      >
        Update
      </button>

    </div>
  );
};

UniversityAdmisionForm.propTypes = {
  universityId: PropTypes.string.isRequired,
  process: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UniversityAdmisionForm;
