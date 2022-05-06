export const types = {
  login: '[AUTH] LOGIN',
  logout: '[AUTH] LOGOUT',
  updateUserData: '[AUTH] UPDATE_USER',
  addPurchasedTest: '[AUTH] ADD_PURCHASED_TEST',

  setError: '[UI] SET_ERROR',
  clearError: '[UI] CLEAR_ERROR',
  loading: '[UI] LOADING',
  loaded: '[UI] LOADED',

  setActiveTestResult: '[TEST] SET_ACTIVE_TEST_RESULT',
  clearActiveTestResult: '[TEST] CLEAR_ACTIVE_TEST_RESULT',
  setTestsResults: '[TEST] SET_TESTS_RESULTS',
  setTests: '[TEST] SET_TESTS',
  setActiveTest: '[TEST] SET_ACTIVE_TEST',
  setQuestions: '[TEST] SET_QUESTIONS',
  clearQuestions: '[TEST] CLEAR_QUESTIONS',

  resetSolvingTest: '[SOLVING] RESET_SOLVING_TEST',
  addQuestionResponse: '[SOLVING] ADD_QUESTION_RESPONSE',
  clearUnsavedQuestionsResponses: '[SOLVING] CLEAR_UNSAVED_QUESTIONS_RESPONSES',
  setSavedQuestionsResponses: '[SOLVING] ADD_SAVED_QUESTION_RESPONSE',
  clearSavedQuestionsResponses: '[SOLVING] CLEAR_SAVED_QUESTION_RESPONSE',

  setBilling: '[BILLING] SET_BILLING',
  setIsPurchased: '[BILLING] SET_IS_PURCHASED',

  setIsEditingModal: '[UI] SET_IS_EDITING_MODAL',
  setUniversities: '[UNIVERSITIES] SET_UNIVERSITIES',
  setActiveUniversity: '[UNIVERSITIES] SET_ACTIVE_UNIVERSITY',
  updateActiveUniversity: '[UNIVERSITIES] UPDATE_ACTIVE_UNIVERSITY',
  deleteLogoUniversity: '[UNIVERSITIES] DELETE_LOGO_UNIVERSITY',
  deleteCampusImageUniversity: '[UNIVERSITIES] DELETE_CAMPUS_IMAGE_UNIVERSITY',
  createUniversityOffer: '[UNIVERSITIES] CREATE_UNIVERSITY_OFFER',
  deleteUniversityOffer: '[UNIVERSITIES] DELETE_UNIVERSITY_OFFER',
  updateUniversitiesOffer: '[UNIVERSITIES] UPDATE_UNIVERSITIES_OFFER',

  setActiveCareer: '[CAREERS] SET_ACTIVE_CAREER',
  setCareers: '[CAREERS] SET_CAREERS',
  setPageCareers: '[CAREERS] SET_PAGE_CAREERS',
  updateMainCareer: '[CAREERS] UPDATE_MAIN_CAREER',
  destroyCareer: '[CAREERS] DESTROY_CAREER',
};
