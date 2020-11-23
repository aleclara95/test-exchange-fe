import { getTradingHistory } from '../../../API/endpoints';

export const getTradingHistoryActionTypes = {
  ERROR: 'ERROR_GET_TRADING_HISTORY',
  SUCCESS: 'SUCCESS_GET_TRADING_HISTORY',
  RESET_SUCCESS: 'RESET_SUCCESS_GET_TRADING_HISTORY'
};

const getTradingHistoryActions = {
  successGetTradingHistory: tradingHistory => ({
    type: getTradingHistoryActionTypes.SUCCESS,
    payload: tradingHistory
  }),
  resetSuccess: () => ({
    type: getTradingHistoryActionTypes.RESET_SUCCESS
  }),
  error: msg => ({
    type: getTradingHistoryActionTypes.ERROR,
    payload: msg
  })
};

export const getTradingHistoryActionCreator = dispatch => ({
  getTradingHistory: async (token, data) => {
    try {
      const response = await getTradingHistory(token, data);
      if (response.status !== 200) throw response;
      const tradingHistory = response.data;
      dispatch(
        getTradingHistoryActions.successGetTradingHistory(tradingHistory)
      );
    } catch (error) {
      dispatch(
        getTradingHistoryActions.error(
          'Could not retrieve trades. Please, try again.'
        )
      );
    }
  },
  resetSuccess: async () => {
    dispatch(getTradingHistoryActions.resetSuccess());
  }
});
