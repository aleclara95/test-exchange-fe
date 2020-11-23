import { orderCreateActionTypes } from './actions';

const INITIAL_STATE_CREATE_ORDER = {
  errorMsg: null,
  success: null
};

const orderCreateReducer = (state = INITIAL_STATE_CREATE_ORDER, actions) => {
  let new_state;

  switch (actions.type) {
    case orderCreateActionTypes.SUCCESS:
      new_state = {
        ...state,
        success: true,
        errorMsg: null
      };
      break;
    case orderCreateActionTypes.RESET_SUCCESS:
      new_state = {
        ...state,
        success: null,
        errorMsg: null
      };
      break;

    case orderCreateActionTypes.ERROR:
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

export { orderCreateReducer };
