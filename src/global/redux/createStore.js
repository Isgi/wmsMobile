import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, purgeStoredState } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage if web, AsyncStorage if react-native

import middlewares from './middlewares';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'checksheet']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'LOGOUT') {
    purgeStoredState(persistConfig);
    newState = undefined;
  }
  return persistedReducer(newState, action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

const persistor = persistStore(store);

export {
  store,
  persistor
};
