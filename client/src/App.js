import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './actions';
// import './App.css';

import Header from './components/Header.component';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import SurveyNewPage from './pages/SurveyNewPage';

class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/surveys" component={DashboardPage} />
              <Route exact path="/surveys/new" component={SurveyNewPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
