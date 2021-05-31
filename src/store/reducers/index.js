import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { ReducerKeys } from '../../constants';

import appReducer from './app';
import userReducer from './user';
import roadsReducer from './roads';

const rootReducer = combineReducers({
  [ReducerKeys.APP]: persistReducer(
    {
      key: ReducerKeys.APP,
      storage,
      blacklist: ['loaderVisible', 'showRequestError', 'requestErrorType']
    },
    appReducer
  ),
  [ReducerKeys.USER]: persistReducer({
    key: ReducerKeys.USER,
    storage,
  }, userReducer),
  [ReducerKeys.ROADS]: persistReducer({
    key: ReducerKeys.ROADS,
    storage,
  }, roadsReducer),
});

export default rootReducer;
