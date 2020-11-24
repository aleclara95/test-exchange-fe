import { getActiveOrdersActionTypes } from './actions';

const INITIAL_STATE_GET_ACTIVE_ORDERS = {
  errorMsg: null,
  success: null,
  activeOrders: null
};

const getActiveOrdersReducer = (
  state = INITIAL_STATE_GET_ACTIVE_ORDERS,
  actions
) => {
  let new_state;

  switch (actions.type) {
    case getActiveOrdersActionTypes.SUCCESS:
      new_state = {
        ...state,
        success: true,
        errorMsg: null,
        activeOrders: actions.payload
      };
      break;
    case getActiveOrdersActionTypes.RESET_SUCCESS:
      new_state = {
        ...state,
        success: null,
        errorMsg: null
      };
      break;

    case getActiveOrdersActionTypes.ERROR:
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

export { getActiveOrdersReducer };
