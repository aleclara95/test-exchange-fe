import { getActiveOrders } from '../../../../API/endpoints';

export const getActiveOrdersActionTypes = {
  ERROR: 'ERROR_GET_ACTIVE_ORDERS',
  SUCCESS: 'SUCCESS_GET_ACTIVE_ORDERS',
  RESET_SUCCESS: 'RESET_SUCCESS_GET_ACTIVE_ORDERS'
};

const getActiveOrdersActions = {
  successGetActiveOrders: activeOrders => ({
    type: getActiveOrdersActionTypes.SUCCESS,
    payload: activeOrders
  }),
  resetSuccess: () => ({
    type: getActiveOrdersActionTypes.RESET_SUCCESS
  }),
  error: msg => ({
    type: getActiveOrdersActionTypes.ERROR,
    payload: msg
  })
};

export const getActiveOrdersActionCreator = dispatch => ({
  getActiveOrders: async (token, data) => {
    try {
      const response = await getActiveOrders(token, data);
      if (response.status !== 200) throw response;
      const activeOrders = response.data;
      dispatch(getActiveOrdersActions.successGetActiveOrders(activeOrders));
    } catch (error) {
      dispatch(
        getActiveOrdersActions.error(
          'Could not retrieve orders. Please, try again.'
        )
      );
    }
  },
  resetSuccess: async () => {
    dispatch(getActiveOrdersActions.resetSuccess());
  }
});
