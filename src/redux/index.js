import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { sessionReducer } from './session/reducers';
import { balancesReducer } from '../containers/Balance/redux/reducers';
import { currencyPairReducer } from '../containers/TopBar/CurrencyPairSelect/redux/reducers';
import { orderCreateReducer } from '../containers/OrderFormContainer/OrderForm/redux/reducers';
import { getOrderBookReducer } from '../containers/OrderBook/redux/reducers';

const persistConfig = {
  key: 'session',
  storage,
  whitelist: ['session']
};

const rootReducer = combineReducers({
  session: sessionReducer,
  balances: balancesReducer,
  currencyPair: currencyPairReducer,
  orderCreate: orderCreateReducer,
  orderBook: getOrderBookReducer
});

export default persistReducer(persistConfig, rootReducer);
