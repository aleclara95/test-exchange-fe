import { currencyPairActionTypes } from './actions';

const INITIAL_STATE_CURRENCYPAIR = {
  errorMsg: null,
  currencyPairs: null,
  currentCurrencyPair: null
};

const currencyPairReducer = (state = INITIAL_STATE_CURRENCYPAIR, actions) => {
  let new_state;

  switch (actions.type) {
    case currencyPairActionTypes.SUCCESS:
      new_state = {
        ...state,
        currencyPairs: actions.payload,
        errorMsg: null
      };
      break;

    case currencyPairActionTypes.SET_CURRENT:
      new_state = {
        ...state,
        currentCurrencyPair: actions.payload
      };
      break;

    case currencyPairActionTypes.ERROR:
      new_state = {
        ...state,
        errorMsg: actions.payload
      };
      break;
    default:
      new_state = state;
  }
  return new_state;
};

export { currencyPairReducer };
