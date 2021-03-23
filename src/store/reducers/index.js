import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import appReducer from './app';
import userReducer from './user';
import { ReducerKeys } from '../../constants';

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
});

export default rootReducer;
