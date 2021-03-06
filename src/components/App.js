import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Transition, config } from 'react-spring';
import { Helmet } from 'react-helmet';

import Landing from './Landing';
import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
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
    else if(path === '/portfolio') return '#65e298';
    else if(path === '/contact') return '#e2d565';
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
        <div id="main" className="main">

          <Helmet>
            <title>Michael Thompson | Fullstack Web Developer</title>
            <meta name="description" content="Michael Thompson is a freelance fullstack web developer based in the United Kingdom." />
          </Helmet>

          <Nav
            currentColor={color}
            setColor={this.setColor}
            setPos={this.setPos}
          />

          <Route render={({ location }) => (
            <Transition
              native
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
                    render={props => (
                      <Landing setColor={this.setColor} style={style} />
                    )}
                  />
                  <Route
                    exact path="/about"
                    render={props => (
                      <About setColor={this.setColor} style={style} />
                    )}
                  />
                  <Route
                    exact path="/portfolio"
                    render={props => (
                      <Portfolio setColor={this.setColor} style={style} />
                    )}
                  />
                  <Route
                    exact path="/contact"
                    render={props => <Contact style={style} />}
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