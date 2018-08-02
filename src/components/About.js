import React from 'react';

import bootstrapLogo from '../images/bootstrap-4.svg';
import htmlLogo from '../images/HTML5_Logo.svg';
import cssLogo from '../images/css3.svg';
import jsLogo from '../images/logo-javascript.svg';
import mongodbLogo from '../images/mongodb.svg';
import nodejsLogo from '../images/nodejs-icon.svg';
import postgresLogo from '../images/postgresql.svg';
import reactLogo from '../images/react.svg';
import sassLogo from '../images/sass-1.svg';

const About = ({ style }) => {
  return (
    <div style={{ ...style }} className="page about">
      <div className="aboutContents">
        <div className="aboutMe">
          <h1>About Me</h1>
          <hr className="hrule"/>
          <p>Hi there! My name is Michael Thompson and I am an aspiring full stack developer.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et hendrerit justo, ullamcorper tincidunt nibh. Aliquam facilisis mi ut aliquam ultrices. Aliquam lacinia hendrerit viverra. Sed convallis et justo.</p>
        </div>
        <div className="techsContainer">
          <h1>Techs I Work With</h1>
          <hr className="hrule"/>
          <div className="techs">
            <img src={htmlLogo} className="techsImage" />
            <img src={cssLogo} className="techsImage" />
            <img src={jsLogo} className="techsImage" />
            <img src={reactLogo} className="techsImage" />
            <img src={nodejsLogo} className="techsImage" />
            <img src={postgresLogo} className="techsImage" />
            <img src={mongodbLogo} className="techsImage" />
            <img src={sassLogo} className="techsImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;