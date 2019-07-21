import React from 'react';
import { Route, IndexRoute, Router, withRouter, browserHistory } from 'react-router';
import App from './App';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App} exact>       
        {/* <Route path="/courses" component={CoursesContainer} />
        <Route path="/course/:courseId" component={CourseContainer} />
        <Route path="/404" component={NotFound} /> */}
        </Route>
    </Router>
  );