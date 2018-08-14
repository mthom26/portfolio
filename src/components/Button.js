import React from 'react';

const Button = ({ text, icon, link }) => {
  return (
    <a href={`${link}`} className="button">
      <span className="buttonText">
        {text}
      </span>
      <div className="buttonIcon">
        <img src={icon} />
      </div>
    </a>
  );
};

export default Button;
