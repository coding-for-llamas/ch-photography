import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storageSession from 'redux-persist/lib/storage/session';
import allReducers from '../allReducers';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};
let mWares = applyMiddleware(thunk);
/* istanbul ignore if */
if (process.env.NODE_ENV === 'development') {
  mWares = applyMiddleware(thunk);
}
const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer, mWares);
const persistor = persistStore(store);
export default { store, persistor };
