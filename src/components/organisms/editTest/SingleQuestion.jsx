import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from 'flowbite-react';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';
import { useForm } from '../../../hooks/useForm';
import InputV2 from '../../atoms/input/InputV2';
import { updateQuestionService } from '../../../services/questionsService';

const SingleQuestion = ({ question }) => {
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

  return (

    <Accordion>
      <Accordion.Panel>
        <Accordion.Title arrowIcon={ChevronDoubleDownIcon}>
          Question #
        </Accordion.Title>
        <Accordion.Content>
          <form onSubmit={handleSubmit}>
            <div className='relative z-0 w-full mb-6 group'>
              <InputV2
                type='text'
                name='description'
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
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Update
            </button>
          </form>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

  );
};
SingleQuestion.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.object.isRequired,
};

export default SingleQuestion;
