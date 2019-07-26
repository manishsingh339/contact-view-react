import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import UserCallContainer from './components/userCall/UserCallContainer';
import MonthlyReport from './components/monthlyReport/MonthlyReport';
import EntireMonthCalls from './components/entireMonthCalls/EntireMonthCalls'
import 'bootstrap/dist/css/bootstrap.min.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} exact />
      <Route path="/userCallDetails/:contactNumber" component={UserCallContainer} />
      <Route path="/monthlyReport/:month" component={MonthlyReport} />        
      <Route path="/entireMonthCalls/:month" component={EntireMonthCalls} />        
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root