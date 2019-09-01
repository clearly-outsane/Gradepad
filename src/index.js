import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import './ReactotronConfig'

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(
  reducers /* preloadedState, */,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
