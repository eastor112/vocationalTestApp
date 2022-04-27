import { createBillingService } from '../../services/billingsServices';
import { types } from '../types/types';
import { addPurchasedTestAsync } from './auth-actions';

export const fetchBillingAction = (testId, description, total, paymentMethod) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.user.uid;

    const billing = await createBillingService(userId, testId, description, total, paymentMethod);

    dispatch(addPurchasedTestAsync(billing.testId));

    dispatch({
      type: types.setBilling,
      payload: billing,
    });
  };
};

export const setIsPurchasedAction = (isPurchased) => {
  return {
    type: types.setIsPurchased,
    payload: isPurchased,
  };
};
