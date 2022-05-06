import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFieldCareerAction } from '../../../context/actions/careers-actions';
import { useForm } from '../../../hooks/useForm';
import DragAndDropList from '../dragAndDropList/DragAndDropList';

const CareerFieldEditForm = () => {
  const dispatch = useDispatch();
  const { activeCareer } = useSelector((state) => state.careers);
  const [fieldList, setFieldList] = useState(activeCareer.field.list);
  const [fieldReferences, setFieldReferences] = useState(activeCareer.field.references);

  const { formValues, handleFormChange, setFormValues } = useForm({
    description: activeCareer.field.description,
    list: activeCareer.field.list,
    references: activeCareer.field.references,
  });

  useEffect(() => {
    setFormValues({
      ...formValues,
      list: fieldList,
      references: fieldReferences,
    });
  }, [fieldList, fieldReferences]);

  const handleUpdate = () => {
    dispatch(updateFieldCareerAction(activeCareer.id, formValues));
  };

  return (
    <div className='mt-8'>

      <div aria-label='career-description' className='relative top-1'>
        <label
          htmlFor='description'
          className='absolute -top-5 -left-3 block mb-2 text-sm text-blue-600 dark:text-gray-400 scale-75'
        >
          Job field description
        </label>
        <textarea
          id='description'
          rows='3'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          placeholder='These professionals work in...'
          name='description'
          value={formValues.description}
          onChange={handleFormChange}
        />

        <DragAndDropList
          label='Job field'
          arrayItems={fieldList}
          setParentArray={setFieldList}
        />
        <DragAndDropList
          label='References'
          arrayItems={fieldReferences}
          setParentArray={setFieldReferences}
        />

        <button
          type='button'
          className='mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default CareerFieldEditForm;
