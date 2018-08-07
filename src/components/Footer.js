import React from 'react';

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

export default Footer;