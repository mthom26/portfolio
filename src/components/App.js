import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition } from 'react-spring';

import Landing from './Landing';
import Nav from './Nav';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="outer">
          <Nav />
          <Route render={({ location }) => (
            <Transition
              keys={location.pathname}
              from={{ transform: 'translateY(100%)' }}
              enter={{ transform: 'translateY(0)' }}
              leave={{ transform: 'translateY(-100%)' }}
            >
              {(style) => (
                <Switch location={location}>
                  <Route exact path="/" render={props => <Landing style={style} />} />
                  <Route exact path="/about" render={props => <About style={style} />} />
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
