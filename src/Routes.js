import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import React from 'react';
import App from './App';

import VideoEntryEditor from './modules/VideoEntryEditor';
import VideoEntryDetails from './modules/VideoEntryDetails';
import VideoEntryList from './modules/VideoEntryList';

export default (
    <Router history={browserHistory}>
        <Route name="app" path="/" component={App}>
            <IndexRoute component={VideoEntryList} />
            <Route name="add" path="add" component={VideoEntryEditor} />
            <Route name="view" path="view/:slug" component={VideoEntryDetails} />
        </Route>
    </Router>
);

