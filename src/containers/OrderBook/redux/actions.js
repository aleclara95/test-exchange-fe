import { getOrderBook } from '../../../API/endpoints';

export const getOrderBookActionTypes = {
  ERROR: 'ERROR_GET_ORDER_BOOK',
  SUCCESS: 'SUCCESS_GET_ORDER_BOOK',
  RESET_SUCCESS: 'RESET_SUCCESS_GET_ORDER_BOOK'
};

const getOrderBookActions = {
  successGetOrder: orderBook => ({
    type: getOrderBookActionTypes.SUCCESS,
    payload: orderBook
  }),
  resetSuccess: () => ({
    type: getOrderBookActionTypes.RESET_SUCCESS
  }),
  error: msg => ({
    type: getOrderBookActionTypes.ERROR,
    payload: msg
  })
};

export const getOrderBookActionCreator = dispatch => ({
  getOrderBook: async (token, data) => {
    try {
      const response = await getOrderBook(token, data);
      if (response.status !== 200) throw response;
      const orderBook = response.data;
      dispatch(getOrderBookActions.successGetOrder(orderBook));
    } catch (error) {
      dispatch(
        getOrderBookActions.error(
          'Could not retrieve orders. Please, try again.'
        )
      );
    }
  },
  resetSuccess: async () => {
    dispatch(getOrderBookActions.resetSuccess());
  }
});
