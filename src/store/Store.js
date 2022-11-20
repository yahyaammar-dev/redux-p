import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import sampleSaga from './Saga'
import sampleTasksReducer from "./Reducer";

const sagaMiddleware = createSagaMiddleware()
const middleware = [logger, sagaMiddleware]

export const store = createStore(sampleTasksReducer, applyMiddleware(...middleware));
sagaMiddleware.run(sampleSaga)

export default store