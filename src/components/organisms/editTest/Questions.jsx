import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'flowbite-react';
import { v4 as uuidv4 } from 'uuid';
import { getAllTestQuestionsService, getTestyById } from '../../../services/vocationalServices';

import SingleQuestion from './SingleQuestion';
import ModalComponent from '../modal/ModalComponent';
import { useModal } from '../../../hooks/useModal';
import { createQuestionService } from '../../../services/questionsService';

const Questions = () => {
  const { testId } = useParams();
  const [test, setTest] = useState({});
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({});

  const { isOpen, openModal, closeModal } = useModal(false);

  useEffect(() => {
    getTestyById(testId).then((data) => {
      if (data === 'error') {
        return 'error';
      }
      return setTest(data);
    });
  }, [testId]);

  useEffect(() => {
    getAllTestQuestionsService(testId).then((data) => {
      setQuestions(data);
    });
  }, [testId]);

  const handleCreateQuestion = () => {
    // setCreating(true);
    // setActiveQuestion({});
    createQuestionService(testId).then((data) => {
      setNewQuestion(data);
    });
    openModal();
  };

  console.log(newQuestion);

  return (
    <div>
      <Button
        className='my-6'
        onClick={handleCreateQuestion}
      >
        Add question
      </Button>
      {
        questions.map((question, index) => (
          <SingleQuestion
            key={uuidv4()}
            question={question}
            test={test}
            testId={testId}
            index={index}
          />
        ))
      }
      <ModalComponent
        isOpen={isOpen}
        closeModal={closeModal}
      >
        Question created and added at the end of the list
      </ModalComponent>
    </div>

  );
};

Questions.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  testId: PropTypes.string.isRequired,
};

export default Questions;
