import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="navButton" onClick={this.toggleOpen}>
        <button>Nav</button>
        {open && (
          <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/about">About</Link>
          </nav>  
        )}
      </div>
    )
  }
}

export default Nav;

