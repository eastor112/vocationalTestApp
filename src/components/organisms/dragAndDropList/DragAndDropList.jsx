/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { Alert } from 'flowbite-react';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from '../../../hooks/useForm';

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const arrayStringsToObject = (array) => {
  return array.map((item) => {
    return {
      id: uuidv4(),
      text: item,
    };
  });
};

const DragAndDropList = ({ label, arrayItems, setParentArray }) => {
  const [arrayList, setArrayList] = useState(arrayStringsToObject(arrayItems));
  const { formValues, handleFormChange, setFormValues } = useForm({
    newItem: '',
  });

  useEffect(() => {
    setParentArray(arrayList.map((item) => item.text));
  }, [arrayList, setParentArray]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.newItem.length > 0) {
      setArrayList([
        ...arrayList,
        {
          id: uuidv4(),
          text: formValues.newItem,
        },
      ]);

      setFormValues({
        newItem: '',
      });
    }
  };

  const handleDeleteItem = (id) => {
    setArrayList(arrayList.filter((item) => item.id !== id));
  };

  return (
    <div aria-label={label.split(' ').join('-')} className='mt-4'>
      <h3 className='text-xs text-blue-600 mb-2'>
        {label}
        {' '}
        list
      </h3>
      {arrayItems.length > 0 ? (
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

            setArrayList((prevItem) => reorder(prevItem, source.index, destination.index));
          }}
        >

          <Droppable droppableId={label.split(' ').join('-')}>

            {(droppableProvided) => (
              <ul
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className='text-sm'
              >
                {arrayList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProvided) => (
                      <li
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className='my-2 bg-white shadow-sm shadow-gray-400 rounded-lg p-1'
                      >
                        <div className='flex w-full justify-between items-center'>

                          <p className='ml-2'>
                            <span className='mr-2'>
                              -
                            </span>
                            {item.text}
                          </p>

                          <button
                            type='button'
                            className='flex focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-xs px-3 py-2'
                            onClick={() => handleDeleteItem(item.id)}
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
                ))}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>

        </DragDropContext>
      )
        : (
          <Alert className='mt-2' color='yellow'>
            <span>
              <span className='font-medium mr-1'>
                Info!
              </span>
              You haven&apos;t added any item yet
            </span>
          </Alert>
        )}

      <form onSubmit={handleSubmit}>
        <div className='relative flex mt-6'>
          <input
            type='search'
            id='new-item-input'
            className='w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mr-2'
            placeholder='Add a new item'
            required=''
            name='newItem'
            value={formValues.newItem}
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
    </div>
  );
};

DragAndDropList.defaultProps = {
  setParentArray: () => { },
};

DragAndDropList.propTypes = {
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  arrayItems: PropTypes.array.isRequired,
  setParentArray: PropTypes.func,
};

export default DragAndDropList;
