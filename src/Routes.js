import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import App from './App';
import Entry from './Entry';

export default (
    <Router history={browserHistory}>
        <Route name="app" path="/" component={App}>
            <Route name="add" path="add" component={Entry} />
        </Route>
    </Router>
);

