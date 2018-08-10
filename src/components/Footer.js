import React from 'react';
import { Spring, config, animated, interpolate } from 'react-spring';

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
          <p>footer</p>
        </div>
      )}
    </Spring>
  );
};

export default Footer;

/*
const Footer = ({ styles }) => {
  //console.log(styles.color);
  return (
    <div className="footer"> 
      <div
        style={{
          background: `${styles.color}`,
          transform: `${styles.transform}`,
          boxShadow: `0px 0px 15px 1px ${styles.color}`
        }}
        className="footerBar"
      />
      <p>footer</p>
    </div>
  );
};
*/