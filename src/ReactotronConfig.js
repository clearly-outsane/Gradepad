import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

const reactotron = Reactotron.configure() // we can use plugins here -- more on this later
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect(); // let's connect!

export default reactotron;