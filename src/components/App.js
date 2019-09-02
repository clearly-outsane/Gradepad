import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store/configureStore";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <p>hey</p>
        </div>
      </Provider>
    );
  }
}

export default App;
