import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reactotron from '../../ReactotronConfig'
import sagas from "../sagas";
import reducers from "../reducers";


const sagaMonitor = reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    reactotron.createEnhancer()
  )
);

sagaMiddleware.run(sagas);

