import { balancesActionTypes } from './actions';

const INITIAL_STATE_BALANCES = {
  errorMsg: null,
  userBalances: null
};

const balancesReducer = (state = INITIAL_STATE_BALANCES, actions) => {
  let new_state;

  switch (actions.type) {
    case balancesActionTypes.SUCCESS:
      new_state = {
        ...state,
        userBalances: actions.payload,
        errorMsg: null
      };
      break;

    case balancesActionTypes.ERROR:
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

export { balancesReducer };
