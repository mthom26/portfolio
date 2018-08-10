import React, { Component, Fragment } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
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
      color: this.getColor(),
      footerBarPos: '0%'
    };

    this.setColor = this.setColor.bind(this);
    this.setPos = this.setPos.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  getColor() {
    const path = this.props.location.pathname;
    if(path === '/') return '#e29865';
    else if (path === '/about') return '#6598e2';
    else if(path === '/portfolio') return '#65e297';
    return '#e29865';
  }

  setColor(newColor) {
    this.setState({ color: newColor });
  }

  setPos(newPos) {
    this.setState({ footerBarPos: newPos });
  }

  render() {
    const { color, footerBarPos } = this.state;
    
    return (
        <div className="main">
          <Nav setColor={this.setColor} setPos={this.setPos} />
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
          <Footer color={color} footerBarPos={footerBarPos} />
        </div>
    );
  }
}

export default withRouter(App);

/*
  <Spring
    config={config.slow}
    to={{ color: color, transform: `translateX(${footerBarPos})` }}
  >
    {style => (
      <Footer styles={style} />
    )}
  </Spring>
*/