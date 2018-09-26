import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

import arrowButton from '../images/arrowButton.svg';

const Landing = ({ style, setColor }) => {
  return (
    <animated.div style={{ ...style }} className="page landing">
      <div className="landingContent">
        <h1>Michael <span className="landingColor">Thompson</span></h1>
        <h2 style={{ fontWeight: 400 }}>Web Developer, Programmer and Designer</h2>
      </div>
      <Link
        to="/about"
        className="nextPageButton"
        onClick={() => setColor('#6598e2')}
      >
        <img src={arrowButton} width="38px" alt="" />
      </Link>
    </animated.div>
  );
};

export default Landing;
