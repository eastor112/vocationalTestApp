import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Button } from 'flowbite-react';
import { ChevronDoubleDownIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { useForm } from '../../../hooks/useForm';
import InputV2 from '../../atoms/input/InputV2';
import { deleteQuestionService, updateQuestionService } from '../../../services/questionsService';

const SingleQuestion = ({ question, index }) => {
  const { formValues, handleFormChange } = useForm({
    statement: question.statement,
    optionA: question.optionA,
    optionB: question.optionB,
    optionC: question.optionC,
    optionD: question.optionD,
  });

  const {
    statement,
    optionA,
    optionB,
    optionC,
    optionD,
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateQuestionService(question.id, formValues).then((data) => {
      console.log(data);
    });
  };

  const handleDeleteQuestion = () => {
    deleteQuestionService(question.id).then((data) => {
      console.log(data);
    });
  };

  return (

    <Accordion>
      <Accordion.Panel>
        <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
          {`Question ${index + 1}`}
        </Accordion.Title>
        <Accordion.Content>
          <form onSubmit={handleSubmit}>
            <div className='relative z-0 w-full mb-6 group'>
              <InputV2
                type='text'
                name='statement'
                label='Description'
                value={statement}
                onChange={handleFormChange}
              />

            </div>
            <div className='grid xl:grid-cols-2 xl:gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <InputV2
                  type='text'
                  name='optionA'
                  label='Option A'
                  value={optionA}
                  onChange={handleFormChange}
                />
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <InputV2
                  type='text'
                  name='optionB'
                  label='Option B'
                  value={optionB}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className='grid xl:grid-cols-2 xl:gap-6'>
              <div className='relative z-0 w-full mb-6 group'>
                <InputV2
                  type='text'
                  name='optionC'
                  label='Option C'
                  value={optionC}
                  onChange={handleFormChange}
                />
              </div>
              <div className='relative z-0 w-full mb-6 group'>
                <InputV2
                  type='text'
                  name='optionD'
                  label='Option D'
                  value={optionD}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className='flex gap-2 mt-6'>
              <Button type='submit' data-cy='update-offer-open' color='yellow'>
                <PencilAltIcon className='mr-2 h-5 w-5' />
                Update
              </Button>
              <Button
                data-cy='delete-offer-open'
                color='red'
                onClick={handleDeleteQuestion}
              >
                <TrashIcon className='mr-2 h-5 w-5' />
                Delete
              </Button>
            </div>
          </form>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

  );
};
SingleQuestion.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleQuestion;
