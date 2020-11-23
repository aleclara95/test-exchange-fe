import { getBalances } from '../../../API/endpoints';

export const balancesActionTypes = {
  ERROR: 'ERROR_BALANCES',
  SUCCESS: 'SUCCESS_BALANCES'
};

const balancesActions = {
  successGetBalances: userBalances => ({
    type: balancesActionTypes.SUCCESS,
    payload: userBalances
  }),
  error: msg => ({
    type: balancesActionTypes.ERROR,
    payload: msg
  })
};

export const balancesActionCreator = dispatch => ({
  getBalances: async (token, data) => {
    try {
      const response = await getBalances(token, data);
      if (response.status !== 200) throw response;
      const balanceData = response.data;
      dispatch(balancesActions.successGetBalances(balanceData));
    } catch (error) {
      dispatch(
        balancesActions.error(
          'There was an error retrieving balances. Please, refresh the page.'
        )
      );
    }
  }
});
