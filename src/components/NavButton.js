import React from 'react'

import line from '../images/line.svg';

const NavButton = ({ toggle, styles }) => {

  return (
    <div className="navButton" onClick={toggle}>
      <div className="navButtonDiv" style={{ transform: styles.transformDiv }}>
        <img
          style={{ transform: styles.transformOne, transformOrigin: 'right' }}
          src={line} height="12px" alt="Menu Button"
        />
        <img src={line} height="12px" alt="Menu Button" />
        <img
          style={{ transform: styles.transformTwo, transformOrigin: 'left' }}
          src={line} height="12px" alt="Menu Button"
        />
      </div>
    </div>
  );
};

export default NavButton;