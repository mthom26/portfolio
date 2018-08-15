import React from 'react'
import { Spring, animated } from 'react-spring';

import line from '../images/line.svg';

const NavButton =({ toggle, open }) => {
  return (
    <div className="navButton" onClick={toggle}>
      <Spring
        native
        to={{
          transformOne: open ? 'translate(-1px, 13px) rotate(60deg)' : 'translate(0px, 0px) rotate(0deg)',
          transformTwo: open ? 'translate(1px, -11px) rotate(-60deg)' : 'translate(0px, 0px) rotate(0deg)',
          transformDiv: open ? 'translate(0px, 17px) rotate(0deg)' : 'translate(0px, 0px) rotate(180deg)'
        }}
      >
        {styles => (
          <animated.div className="navButtonDiv" style={{ transform: styles.transformDiv }}>
            <animated.img
              style={{ transform: styles.transformOne, transformOrigin: 'right' }}
              src={line} height="12px" alt="Menu Button"
            />
            <img src={line} height="12px" alt="Menu Button" />
            <animated.img
              style={{ transform: styles.transformTwo, transformOrigin: 'left' }}
              src={line} height="12px" alt="Menu Button"
            />
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

export default NavButton;