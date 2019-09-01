import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateClass from './Class/CreateClass'

class App extends Component {
    render() {
        return (
            <Fragment>
                <nav></nav>
                <Router>
                    <Route path="/create-class" component={CreateClass} />
                </Router>
            </Fragment>
        )
    }
}

export default App
