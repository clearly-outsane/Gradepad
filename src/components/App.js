import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store/configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateClass from './Class/CreateClass';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <Router>
                        <Route path="/create-class" component={CreateClass} />
                    </Router>
                </Provider>
            </Fragment>
        );
    }
}

export default App;
