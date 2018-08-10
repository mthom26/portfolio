import React from 'react';
import { animated } from 'react-spring';

const Landing = ({ style }) => {
  return (
    <animated.div style={{ ...style }} className="page landing">
      <h1>Michael <span className="landingColor">Thompson</span></h1>
      <h2>Web Developer, Programmer and Designer</h2>
      <div>
        Links
      </div>
    </animated.div>
  );
};

export default Landing;
