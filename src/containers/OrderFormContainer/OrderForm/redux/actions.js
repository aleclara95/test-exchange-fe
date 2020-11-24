import { createOrder } from '../../../../API/endpoints';
import { balancesActionCreator } from '../../../Balance/redux/actions';
import { getOrderBookActionCreator } from '../../../OrderBook/redux/actions';
import { getActiveOrdersActionCreator } from '../../../BottomTabs/ActiveOrders/redux/actions';

import { selectCurrentCurrencyPair } from '../../../TopBar/CurrencyPairSelect/redux/selectors';
import { selectUser } from '../../../../redux/session/selectors';
import { store } from '../../../../redux/store';

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

      // Update Balances
      // Select token
      let userData = selectUser(store.getState());
      let username;
      if (userData) {
        token = userData.token;
        username = userData.user.username;
      }

      // Select currentCurrencyPair
      let currentCurrencyPair = selectCurrentCurrencyPair(store.getState());
      const { currentOrigin, currentDestination } = currentCurrencyPair;
      const currency = `${currentOrigin},${currentDestination}`;

      // Get balances
      const balanceData = {
        user: username,
        currency: currency
      };
      balancesActionCreator(dispatch).getBalances(token, balanceData);

      // Get order book
      const orderBookData = {
        origin: currentOrigin,
        destination: currentDestination,
        user: username
      };
      getOrderBookActionCreator(dispatch).getOrderBook(token, orderBookData);

      // Get active orders
      const activeOrdersData = {
        origin: currentOrigin,
        destination: currentDestination,
        user: username
      };
      getActiveOrdersActionCreator(dispatch).getActiveOrders(
        token,
        activeOrdersData
      );
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
