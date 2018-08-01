import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, Spring, config } from 'react-spring';

import Landing from './Landing';
import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#e29865'
    };

    this.setColor = this.setColor.bind(this);
  }

  setColor(newColor) {
    this.setState({ color: newColor });
  }

  render() {
    const { color } = this.state;

    return (
      <Router>
        <div className="main">
          <Nav setColor={this.setColor} />
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
          <Spring
            to={{ color: color }}
          >
            {style => (
              <Footer styles={style} />
            )}
          </Spring>
        </div>
      </Router>
    );
  }
}

export default App;
