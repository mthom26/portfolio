import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Transition, Spring, config } from 'react-spring';

import NavButton from './NavButton';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  handlePageChange(color) {
    this.toggleOpen();
    this.props.setColor(color);
  }

  render() {
    const { open } = this.state;
    const { setColor } = this.props;

    return (
      <Fragment>

        <Spring
          to={{
            transformOne: open ? 'translate(-1px, 13px) rotate(60deg)' : 'translate(0px, 0px) rotate(0deg)',
            transformTwo: open ? 'translate(1px, -11px) rotate(-60deg)' : 'translate(0px, 0px) rotate(0deg)',
            transformDiv: open ? 'translate(0px, 17px) rotate(0deg)' : 'translate(0px, 0px) rotate(180deg)'
          }}
        >
          {style => (
            <NavButton styles={style} toggle={this.toggleOpen} />
          )}
        </Spring>
        
        <Transition
          config={config.slow}
          from={{ transform: 'translateY(-100%)' }}
          enter={{ transform: 'translateY(0)' }}
          leave={{ transform: 'translateY(-100%)' }}
        >
          {open && (style => (
            <nav style={{ ...style }} className="navPage">
              <Link onClick={() => this.handlePageChange('#e29865')} to="/">Home</Link> <br />
              <Link onClick={() => this.handlePageChange('#6598e2')} to="/about">About</Link> <br />
              <Link onClick={() => this.handlePageChange('#65e298')} to="/portfolio">Portfolio</Link>
            </nav>  
          ))}
        </Transition>
      </Fragment>
    )
  }
}

export default Nav;

