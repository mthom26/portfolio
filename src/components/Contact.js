import React from 'react';
import { animated } from 'react-spring';

const Contact = ({ style }) => {
  return (
    <animated.div style={{ ...style }} className="page contact">
      <div className="contactContent">
        <h1>Contact Me</h1>
        <p>If you want to discuss your project just send me an email!</p>
        <a
          className="contactEmail"
          href="mailto:michaelthompson.code@gmail.com"
        >
          michaelthompson.code@gmail.com
        </a>
      </div>
    </animated.div>
  );
};

export default Contact;
