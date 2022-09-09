import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Homepage from './home';
import FlashcardHome from './flashcard-home';
import Nomatch from './no-match';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      status: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
    this.authorizedPages = this.authorizedPages.bind(this)

  }

  handleSuccessfulLogin() {
    this.setState({
      status: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      status: "NOT_LOGGED_IN"
    })
  }

  authorizedPages() {
    return [
      <Route
        path="/cards"
        key="/cards"
        render={props => (
          <FlashcardHome
            {...props}
            status={this.state.status}
            token={this.state.token}
          />
        )}
      />
    ]
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>

            <Route
              exact path="/"
              render={props => (
                <Homepage
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              )}
            />

            {this.state.status === "LOGGED_IN" ? this.authorizedPages() : null}

            <Route component={Nomatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}