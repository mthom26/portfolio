import React, { Fragment } from 'react';
import { Transition, animated } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons';
import { Link } from 'react-router-dom';

import htmlLogo from '../images/HTML5_Logo.svg';
import cssLogo from '../images/css3.svg';
import jsLogo from '../images/logo-javascript.svg';
import mongodbLogo from '../images/mongodb.svg';
import nodejsLogo from '../images/nodejs-icon.svg';
import postgresLogo from '../images/postgresql.svg';
import reactLogo from '../images/react.svg';
import sassLogo from '../images/sass-1.svg';

const About = ({ style, setColor }) => {
  return (
    <animated.div style={{ ...style }} className={`page about`}>
      <div className="aboutContents">
        <Transition 
          native
          impl={TimingAnimation}
          config={{ duration: 200, easing: Easing.linear }}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
        >
          {styles => {
            return (
            <Fragment>
              <animated.div style={{ ...styles }} className={`aboutMe`}>
                <h1>About Me</h1>
                <hr className="hrule"/>
                <p>Hi there! My name is Michael Thompson and I am an aspiring full stack developer.</p>
                <p>Most of my work consists of Front End projects built with React however I always enjoy working on Server Side code when the opportunity arises.</p>
                <p>I am currently taking on freelance projects from simple one page websites to full stack web applications. If you think I can help be sure to get in touch!</p>
              </animated.div>
              <animated.div style={{ ...styles }} className={`techsContainer`}>
                <h1>Skills</h1>
                <hr className="hrule"/>
                <div className="techs">
                  <img src={htmlLogo} className="techsImage"
                    alt="HTML Logo" />
                  <img src={cssLogo} className="techsImage"
                    alt="CSS Logo" />
                  <img src={jsLogo} className="techsImage"
                    alt="Javascript Logo" />
                  <img src={reactLogo} className="techsImage" 
                    alt="ReactJS Logo" />
                  <img src={nodejsLogo} className="techsImage"
                    alt="NodeJS Logo" />
                  <img src={postgresLogo} className="techsImage"
                    alt="Postgres Logo" />
                  <img src={mongodbLogo} className="techsImage"
                    alt="MongoDB Logo" />
                  <img src={sassLogo} className="techsImage" 
                    alt="SASS Logo" />
                </div>
              </animated.div>
            </Fragment>
            );
          }}
        </Transition>
      </div>
      <Link
        to="/portfolio"
        className="nextPageButton"
        onClick={() => setColor('#65e298')}
      >
        Next
      </Link>
    </animated.div>
  );
};

export default About;