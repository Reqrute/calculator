import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'

import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, thunk)),
)

sagaMiddleware.run(rootSaga)