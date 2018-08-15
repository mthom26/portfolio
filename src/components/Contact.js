import React from 'react';
import { animated } from 'react-spring';

const Contact = ({ style }) => {
  return (
    <animated.div style={{ ...style }} className="page contact">
      <h1>Contact Me</h1>
      <p>I would love to hear about your project! Send me an email to get in touch!</p>
      <a href="mailto:michaelthompson.code@gmail.com">michaelthompson.code@gmail.com</a>
    </animated.div>
  );
};

export default Contact;
