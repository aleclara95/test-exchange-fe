import { sessionActionTypes } from './actions';

const INITIAL_STATE_SESSION = {
  errorMsg: null,
  user: null
};

const sessionReducer = (state = INITIAL_STATE_SESSION, actions) => {
  let new_state;

  switch (actions.type) {
    case sessionActionTypes.SUCCESS:
      new_state = {
        ...state,
        user: actions.payload,
        errorMsg: null
      };
      break;

    case sessionActionTypes.ERROR:
      new_state = {
        ...state,
        errorMsg: actions.payload
      };
      break;

    case sessionActionTypes.LOGOUT:
      new_state = {
        ...state,
        user: null
      };
      break;
    default:
      new_state = state;
  }
  return new_state;
};

export { sessionReducer };
