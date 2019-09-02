import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import reactotron from '../../ReactotronConfig'

const sagaMonitor = reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reactotron.createEnhancer()
  )
);