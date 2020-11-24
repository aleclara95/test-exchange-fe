import API from './';

// Session
const _login = async credentials => {
  const url = '/token-auth/';
  const response = await API.post(url, credentials);
  return response;
};

// Balance
const getBalances = async (token, data) => {
  const { user, currency } = data;
  const url = `/user_balance/?user=${user}&currency=${currency}`;
  const response = await API.get(url, token);
  return response;
};

// Currency Pair
const getCurrencyPairs = async token => {
  const url = `/currency_pair/`;
  const response = await API.get(url, token);
  return response;
};

// Orders
const createOrder = async (token, data) => {
  const url = `/order/`;
  const response = await API.post(url, data, token);
  return response;
};

// Here we could make a more generic endpoint for every get to the 'order' endpoint.
// With some generic processing of the query params.
const getOrderBook = async (token, data) => {
  const { origin, destination, user } = data;
  const url = `/order/?origin=${origin}&destination=${destination}&is_active=true&exclude_user=${user}&o=-price`;
  const response = await API.get(url, token);
  return response;
};

const getActiveOrders = async (token, data) => {
  const { origin, destination, user } = data;
  const url = `/order/?origin=${origin}&destination=${destination}&is_active=true&user=${user}&o=-price`;
  const response = await API.get(url, token);
  return response;
};

// Trades
const getTradingHistory = async token => {
  const url = `/trade/?is_active=true&o=-create_date`;
  const response = await API.get(url, token);
  return response;
};

export {
  _login,
  getBalances,
  getCurrencyPairs,
  createOrder,
  getOrderBook,
  getActiveOrders,
  getTradingHistory
};
