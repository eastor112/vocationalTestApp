/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks/useForm';
import { updateUniversityProcess } from '../../../services/universitiesServices';

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const UniversityAdmisionForm = ({ universityId, process }) => {
  const initialSteps = process.map((step) => ({ id: uuidv4(), title: step }));

  const [steps, setSteps] = useState(initialSteps);

  const { formValues, handleFormChange, setFormValues } = useForm({
    newStep: '',
  });

  const handleDeleteStep = (StepId) => {
    const newSteps = steps.filter((step) => step.id !== StepId);
    setSteps(newSteps);
  };

  const handleAddStep = (e) => {
    e.preventDefault();
    setSteps([...steps, { id: uuidv4(), title: formValues.newStep }]);
    setFormValues({ newStep: '' });
  };

  const handleSubmit = (e) => {
    const formatProcess = steps.map((step) => step.title);

    updateUniversityProcess(universityId, formatProcess)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className='mt-5'>
      <h3 className='font-medium'>Admision Process</h3>

      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;

          if (!destination) {
            return;
          }
          if (
            source.index === destination.index
            && source.droppableId === destination.droppableId
          ) {
            return;
          }

          setSteps((prevSteps) => reorder(prevSteps, source.index, destination.index));
        }}
      >
        <div className='mt-2'>

          <Droppable droppableId='steps'>
            {(droppableProvided) => (

              <ul
                className='text-sm'
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
              >
                {
                  steps.length === 0 && (
                    <div className='p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800' role='alert'>
                      <span className='font-medium mr-2'>Info!</span>
                      You have not set any steps yet
                    </div>
                  )
                }
                {
                  steps.map((step, index) => (
                    <Draggable key={uuidv4()} draggableId={step.id} index={index}>
                      {(draggableProvided) => (
                        <li
                          className='my-2 bg-white shadow-sm shadow-gray-400 rounded-lg p-1'
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                        >
                          <div className='flex w-full justify-between items-center'>

                            <p className='ml-2'>
                              <span className='mr-2'>
                                -
                              </span>
                              {step.title}
                            </p>

                            <button
                              type='button'
                              className='flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-xs px-3 py-2'
                              onClick={() => handleDeleteStep(step.id)}
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                strokeWidth='2'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                />
                              </svg>
                            </button>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))
                }
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      <form className='pt-4' onSubmit={handleAddStep}>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
        >
          Search
        </label>
        <div className='relative flex '>
          <input
            type='search'
            id='default-search'
            className='w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mr-2'
            placeholder='Add a new step'
            required=''
            name='newStep'
            value={formValues.newStep}
            onChange={handleFormChange}
          />
          <button
            type='submit'
            className='text-white whitespace-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3'
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
            </svg>
          </button>
        </div>
      </form>

      <button
        type='button'
        className='mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={handleSubmit}
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
