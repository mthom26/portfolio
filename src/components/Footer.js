import React from 'react';
import { Spring, config, animated, interpolate } from 'react-spring';

import emailIcon from '../images/envelopeWhite.svg';
import githubIcon from '../images/githubWhite.svg';

const Footer = ({ color, footerBarPos }) => {
  return (
    <Spring
      native
      config={config.slow}
      to={{ color: color, transform: footerBarPos }}
    >
      {({ color, transform }) => (
        <div className="footer">
          <animated.div
            style={{
              backgroundColor: color,
              boxShadow: color.interpolate(color => `0px 0px 15px 1px ${color}`),
              transform: transform.interpolate(t => `translateX(${t})`)
            }}
            className="footerBar"
          />
          <div className="footerContent">
            <a className="footerLink" href="mailto:michaelthompson.code@gmail.com">
              <img src={emailIcon} width="32px"/>
            </a>
            <a className="footerLink" href="https://github.com/mthom26">
              <img src={githubIcon} width="32px" />
            </a>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default Footer;