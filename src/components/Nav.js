import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Transition, Spring, config, animated } from 'react-spring';

import NavButton from './NavButton';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);

    this.ref1 = React.createRef();
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
    this.props.setPos(this.state.open ? '0%' : '-100%');
  }

  handlePageChange(color) {
    this.toggleOpen();
    this.props.setColor(color);
    this.props.setPos('0%');
  }

  render() {
    const { open } = this.state;
    // Using currentColor to add className, works but is messy (see style.css)
    const { setColor, currentColor } = this.props;

    return (
      <Fragment>
        <NavButton toggle={this.toggleOpen} open={open} />

        <Transition
          native
          config={config.slow}
          from={{ transform: 'translateY(-100%)' }}
          enter={{ transform: 'translateY(0)' }}
          leave={{ transform: 'translateY(-100%)' }}
        >
          {open && (style => (
            <animated.nav style={{ ...style }} className="navPage">
              <Link
                className={`navLink nlHover${currentColor.slice(1)}`}
                onClick={() => this.handlePageChange('#e29865')}
                to="/">Home</Link>

              <Link
                className={`navLink nlHover${currentColor.slice(1)}`}
                onClick={() => this.handlePageChange('#6598e2')}
                to="/about">About</Link>

              <Link
                className={`navLink nlHover${currentColor.slice(1)}`}
                onClick={() => this.handlePageChange('#65e298')}
                to="/portfolio">Portfolio</Link>

              <Link
                className={`navLink nlHover${currentColor.slice(1)}`}
                onClick={() => this.handlePageChange('#e2d565')} 
                to="/contact">Contact</Link>

            </animated.nav>  
          ))}
        </Transition>
      </Fragment>
    )
  }
}

export default Nav;

