import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import React from 'react';
import App from './App';

import VideoEntryEditor from './components/VideoEntryEditor';
import VideoEntryDetails from './components/VideoEntryDetails';
import VideoEntryList from './components/VideoEntryList';

export default (
    <Router history={browserHistory}>
        <Route name="app" path="/" component={App}>
            <IndexRoute component={VideoEntryList} />
            <Route name="page" path="page/:page" component={VideoEntryList} />
            <Route name="add" path="add" component={VideoEntryEditor} />
            <Route name="edit" path="edit/:id" component={VideoEntryEditor} />
            <Route name="view" path="details/:id" component={VideoEntryDetails} />
        </Route>
    </Router>
);

