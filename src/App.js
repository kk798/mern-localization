import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { languages } from './common'
import _ from 'lodash'

import Create from './components/Create';
import Edit from './components/Edit';
import List from './components/List';
import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
  render() {
    let locale = this.props.lang || 'en'
    let messages = _.find(languages, { locale }).messages
    return (
      <IntlProvider locale={this.props.lang || 'en'} messages={messages}>
        <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/create' component={Create} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/list' component={List} />
            </Switch>

          </div>
        </Router>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  }
}
export default connect(mapStateToProps)(App);
