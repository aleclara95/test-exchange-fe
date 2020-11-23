import { getOrderBookActionTypes } from './actions';

const INITIAL_STATE_GET_ORDER_BOOK = {
  errorMsg: null,
  success: null,
  orderBook: null
};

const getOrderBookReducer = (state = INITIAL_STATE_GET_ORDER_BOOK, actions) => {
  let new_state;

  switch (actions.type) {
    case getOrderBookActionTypes.SUCCESS:
      new_state = {
        ...state,
        success: true,
        errorMsg: null,
        orderBook: actions.payload
      };
      break;
    case getOrderBookActionTypes.RESET_SUCCESS:
      new_state = {
        ...state,
        success: null,
        errorMsg: null
      };
      break;

    case getOrderBookActionTypes.ERROR:
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

export { getOrderBookReducer };
