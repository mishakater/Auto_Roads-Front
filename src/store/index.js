import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const ownCompose = compose(applyMiddleware(sagaMiddleware));
export const store = createStore(rootReducer, ownCompose);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
