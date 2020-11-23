import { _login } from '../../API/endpoints';

export const sessionActionTypes = {
  ERROR: 'ERROR_LOGIN',
  SUCCESS: 'SUCCESS_LOGIN',
  LOGOUT: 'LOGOUT'
};

const sessionActions = {
  successLogin: userData => ({
    type: sessionActionTypes.SUCCESS,
    payload: userData
  }),
  error: msg => ({
    type: sessionActionTypes.ERROR,
    payload: msg
  }),
  logout: () => ({
    type: sessionActionTypes.LOGOUT
  })
};

export const sessionActionCreator = dispatch => ({
  login: async credentials => {
    try {
      const response = await _login(credentials);
      if (response.status !== 200) throw response;

      const userData = response.data;
      dispatch(sessionActions.successLogin(userData));
    } catch (error) {
      dispatch(sessionActions.error('Invalid credentials. Please, try again.'));
    }
  },
  logout: async () => {
    dispatch(sessionActions.logout());
  }
});
