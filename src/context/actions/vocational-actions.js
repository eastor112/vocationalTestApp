import Swal from 'sweetalert2';
import { processResponses } from '../../helpers/testsHelpers';
import { createMultipleQuestionResponseService } from '../../services/solvingTestServices';
import {
  createTestResultService,
  fetchAllTestsService,
  getAllTestQuestionsService,
  getTestService,
} from '../../services/vocationalServices';
import { types } from '../types/types';

export const getAllTestsAction = () => {
  return async (dispatch) => {
    const tests = await fetchAllTestsService();

    localStorage.setItem('tests', JSON.stringify(tests));

    dispatch({
      type: types.setTests,
      payload: tests,
    });
  };
};

export const getTestAction = (testId) => {
  return async (dispatch) => {
    const test = await getTestService(testId);

    dispatch({
      type: types.setActiveTest,
      payload: test,
    });
  };
};

export const createTestResultAction = () => {
  return async (dispatch, getState) => {
    Swal.fire({
      title: 'Saving your answers...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const {
      auth: { user },
      vocational: { activeTest },
      solvingTest: { unsavedQuestionsResponses },
    } = getState();

    const { firstOption, secondOption, answers } = processResponses(
      unsavedQuestionsResponses,
    );

    const testResult = await createTestResultService(
      user.uid,
      activeTest.id,
      answers,
      firstOption,
      secondOption,
    );

    const savedQuestionsResponses = await createMultipleQuestionResponseService(
      unsavedQuestionsResponses,
      testResult.id,
    );

    dispatch({
      type: types.setTestResult,
      payload: testResult,
    });

    dispatch({
      type: types.setSavedQuestionsResponses,
      payload: savedQuestionsResponses,
    });

    Swal.close();
  };
};

export const getAllTestQuestionsAction = (testId) => {
  return async (dispatch) => {
    const questions = await getAllTestQuestionsService(testId);

    dispatch({
      type: types.setQuestions,
      payload: questions,
    });
  };
};
