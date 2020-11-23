import { getCurrencyPairs } from '../../../../API/endpoints';

import { balancesActionCreator } from '../../../Balance/redux/actions';

export const currencyPairActionTypes = {
  ERROR: 'ERROR_CURRENCYPAIR',
  SUCCESS: 'SUCCESS_CURRENCYPAIR',
  SET_CURRENT: 'SET_CURRENT_CURRENCYPAIR'
};

const currencyPairActions = {
  successGetCurrencyPairs: currencyPairs => ({
    type: currencyPairActionTypes.SUCCESS,
    payload: currencyPairs
  }),
  setCurrentCurrencyPair: currentCurrencyPair => ({
    type: currencyPairActionTypes.SET_CURRENT,
    payload: currentCurrencyPair
  }),
  error: msg => ({
    type: currencyPairActionTypes.ERROR,
    payload: msg
  })
};

export const currencyPairActionCreator = dispatch => ({
  getCurrencyPairs: async (token, data) => {
    try {
      const response = await getCurrencyPairs(token, data);
      if (response.status !== 200) throw response;
      const currencyPairsData = response.data;
      dispatch(currencyPairActions.successGetCurrencyPairs(currencyPairsData));
    } catch (error) {
      dispatch(
        currencyPairActions.error(
          'There was an error retrieving currencyPair. Please, refresh the page.'
        )
      );
    }
  },
  setCurrentCurrencyPair: currencyPair => {
    dispatch(currencyPairActions.setCurrentCurrencyPair(currencyPair));
  }
});
