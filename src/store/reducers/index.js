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
  [ReducerKeys.USER]: userReducer,
  [ReducerKeys.ROADS]: roadsReducer,
});

export default rootReducer;
