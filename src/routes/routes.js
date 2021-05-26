import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from '../App'
import Layout from '../components/Layout'
import Options from '../components/Options'
export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Layout>
                    <Route exact path='/' component={App} />
                    <Route exact path='/tracking-options' component={Options} />
                    </Layout>
                </Switch>
            </Router>
        )
    }
}
