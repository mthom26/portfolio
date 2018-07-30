import React from 'react'

import line from '../images/line.svg';

const NavButton = ({ toggle }) => {
  return (
    <div className="navButton" onClick={toggle}>
      <img
        src={line} height="12px"
      />
      <img src={line} height="12px" />
      <img
        src={line} height="12px"
      />
    </div>
  );
};

export default NavButton;

/*
<div className="navButton" onClick={toggle}>
  <img
    style={{
      transform: 'translate(-1px, 13px) rotate(60deg)',
      transformOrigin: 'right',
    }}
    src={line} height="12px"
  />
  <img src={line} height="12px" />
  <img
    style={{
      transform: 'translate(1px, -11px) rotate(-60deg)',
      transformOrigin: 'left',
    }}
    src={line} height="12px"
  />
</div>
*/