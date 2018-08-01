import React from 'react';

const Footer = ({ styles }) => {
  return (
    <div style={{ borderTop: `2px solid ${styles.color}`}} className="footer">
      <p>footer</p>
    </div>
  );
};

export default Footer;
