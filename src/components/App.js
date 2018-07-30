import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, config } from 'react-spring';

import Landing from './Landing';
import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Nav />
          <Route render={({ location }) => (
            <Transition
              config={config.slow}
              keys={location.pathname}
              from={{ transform: 'translateY(100%)' }}
              enter={{ transform: 'translateY(0)' }}
              leave={{ transform: 'translateY(-100%)' }}
            >
              {(style) => (
                <Switch location={location}>
                  <Route
                    exact path="/"
                    render={props => <Landing style={style} />}
                  />
                  <Route
                    exact path="/about"
                    render={props => <About style={style} />}
                  />
                  <Route
                    exact path="/portfolio"
                    render={props => <Portfolio style={style} />}
                  />
                </Switch>
              )}
            </Transition>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
