import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from '../';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const persistor = persistStore(store);

export { store, persistor };
