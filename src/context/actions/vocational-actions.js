import Swal from 'sweetalert2';
import { processResponses } from '../../helpers/testsHelpers';
import { createMultipleQuestionResponseService } from '../../services/solvingTestServices';
import {
  createTestResultService,
  destroyTestResultsService,
  fetchAllTestsResultsService,
  fetchAllTestsService,
  fetchOneTestResultService,
  getAllTestQuestionsService,
  getTestService,
} from '../../services/vocationalServices';
import { types } from '../types/types';
import { setSavedQuestionsResponsesAction } from './solvingTest-actions';

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
      type: types.setActiveTestResult,
      payload: testResult,
    });

    dispatch(setSavedQuestionsResponsesAction(savedQuestionsResponses));

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

export const clearQuestionsAction = () => {
  return {
    type: types.clearQuestions,
    payload: null,
  };
};

export const getAllTestsResultsAction = () => {
  return async (dispatch, getState) => {
    const {
      auth: { user },
    } = getState();

    Swal.fire({
      title: 'Getting your results...',
      html: 'Wait a moment...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const testsResults = await fetchAllTestsResultsService(user.uid);

      dispatch({
        type: types.setTestsResults,
        payload: testsResults,
      });

      Swal.close();
    } catch (err) {
      Swal.close();
      Swal.fire({
        title: 'Error',
        html: err.message,
        icon: 'error',
      });
    }
  };
};

export const getActiveTestResultAction = (testId) => {
  return async (dispatch) => {
    const testResult = await fetchOneTestResultService(testId);

    dispatch({
      type: types.setActiveTestResult,
      payload: testResult,
    });
  };
};

export const clearActiveTestResultAction = () => {
  return {
    type: types.clearActiveTestResult,
  };
};

export const destroyTestResultAction = (testId) => {
  return async (dispatch) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: 'Deleting...',
        html: 'Wait a moment...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      try {
        await destroyTestResultsService(testId);

        dispatch({
          type: types.deleteTestResult,
          payload: testId,
        });

        Swal.close();
      } catch (err) {
        Swal.fire({
          title: 'Error!',
          icon: 'error',
          html: err.message,
          confirmButtonText: 'Ok',
        }).then(() => {
          Swal.close();
        });
      }
    }
  };
};
