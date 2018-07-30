import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Transition, config } from 'react-spring';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <div className="navButton" onClick={this.toggleOpen}>
          <button>Nav</button>
        </div>
        <Transition
          config={config.slow}
          from={{ transform: 'translateY(-100%)' }}
          enter={{ transform: 'translateY(0)' }}
          leave={{ transform: 'translateY(-100%)' }}
        >
          {open && (style => (
            <nav style={{ ...style }} className="page nav">
              <Link onClick={this.toggleOpen} to="/">Home</Link> <br />
              <Link onClick={this.toggleOpen} to="/about">About</Link> <br />
              <Link onClick={this.toggleOpen} to="/portfolio">Portfolio</Link>
            </nav>  
          ))}
        </Transition>
      </Fragment>
    )
  }
}

export default Nav;

