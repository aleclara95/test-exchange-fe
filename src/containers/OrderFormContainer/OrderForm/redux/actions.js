import { createOrder } from '../../../../API/endpoints';

export const orderCreateActionTypes = {
  ERROR: 'ERROR_CREATE_ORDER',
  SUCCESS: 'SUCCESS_CREATE_ORDER',
  RESET_SUCCESS: 'RESET_SUCCESS_CREATE_ORDER'
};

const orderCreateActions = {
  successCreateOrder: () => ({
    type: orderCreateActionTypes.SUCCESS
  }),
  resetSuccess: () => ({
    type: orderCreateActionTypes.RESET_SUCCESS
  }),
  error: msg => ({
    type: orderCreateActionTypes.ERROR,
    payload: msg
  })
};

export const orderCreateActionCreator = dispatch => ({
  createOrder: async (token, data) => {
    try {
      const response = await createOrder(token, data);
      if (response.status !== 200 && response.status !== 201) throw response;
      dispatch(orderCreateActions.successCreateOrder());
    } catch (error) {
      dispatch(
        orderCreateActions.error('Could not create order. Please, try again.')
      );
    }
  },
  resetSuccess: async () => {
    dispatch(orderCreateActions.resetSuccess());
  }
});
