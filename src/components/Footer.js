import React from 'react';

const Footer = ({ styles }) => {
  console.log(styles.color);
  return (
    <div
      style={{
        background: `linear-gradient(${styles.color} -40%, #3a3a3a 40%)`,
        borderTop: `2px solid ${styles.color}`
      }}
      className="footer"
    >
      <p>footer</p>
    </div>
  );
};

export default Footer;
