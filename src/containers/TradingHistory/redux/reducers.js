import { getTradingHistoryActionTypes } from './actions';

const INITIAL_STATE_GET_TRADING_HISTORY = {
  errorMsg: null,
  success: null,
  tradingHistory: null
};

const getTradingHistoryReducer = (
  state = INITIAL_STATE_GET_TRADING_HISTORY,
  actions
) => {
  let new_state;

  switch (actions.type) {
    case getTradingHistoryActionTypes.SUCCESS:
      new_state = {
        ...state,
        success: true,
        errorMsg: null,
        tradingHistory: actions.payload
      };
      break;
    case getTradingHistoryActionTypes.RESET_SUCCESS:
      new_state = {
        ...state,
        success: null,
        errorMsg: null
      };
      break;

    case getTradingHistoryActionTypes.ERROR:
      new_state = {
        ...state,
        success: false,
        errorMsg: actions.payload
      };
      break;

    default:
      new_state = state;
  }
  return new_state;
};

export { getTradingHistoryReducer };
