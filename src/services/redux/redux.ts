import AsyncStorage from '@react-native-community/async-storage';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import { rootReducer } from './reducers';

const PERSIST_CONFIG = {
  key: 'cryptopedia',
  storage: AsyncStorage,
};

const reducer = persistReducer(PERSIST_CONFIG, rootReducer);
export const REDUX_STORE = createStore(reducer);

export const PERSISTOR = persistStore(REDUX_STORE);
