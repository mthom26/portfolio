import React from 'react';

const Landing = ({ style }) => {
  return (
    <div style={{ ...style }} className="page landing">
      <h1>Michael <span className="landingColor">Thompson</span></h1>
      <h2>Web Developer, Programmer and Designer</h2>
      <div>
        Links
      </div>
    </div>
  );
};

export default Landing;
