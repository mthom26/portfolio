import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

import htmlLogo from '../images/HTML5_Logo.svg';
import cssLogo from '../images/css3.svg';
import jsLogo from '../images/logo-javascript.svg';
import mongodbLogo from '../images/mongodb.svg';
import nodejsLogo from '../images/nodejs-icon.svg';
import postgresLogo from '../images/postgresql.svg';
import reactLogo from '../images/react.svg';
import sassLogo from '../images/sass-1.svg';
import arrowButton from '../images/arrowButton.svg';

class About extends React.Component {
  componentDidMount() {
    const scrollableDiv = document.getElementById('main');
    //console.log(this.scrollableDiv);
    scrollableDiv.scrollTop = 0;
    ReactGA.initialize('UA-107308251-4');
    ReactGA.pageview('/about');
  }
  
  render() {
    const { style, setColor } = this.props;

    return (
      <animated.div style={{ ...style }} className={`page about`}>
        <div className="aboutContents">
          <div className={`aboutMe`}>
            <h1>About Me</h1>
            <hr className="hrule"/>
            <p>Hi there. My name is Michael Thompson and I am an aspiring full stack web developer.</p>
            <p>I enjoy solving problems and implementing features on both the front and back end of the stack. Specifically I am confident in React and NodeJS.</p>
            <p>I am currently taking on freelance projects from simple one page websites to full stack web applications. If you think I can help be sure to <Link to="/contact" onClick={() => setColor('#e2d565')}><span className="aboutLink">get in touch!</span></Link></p>
          </div>
          <div className={`techsContainer`}>
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
          </div>
        </div>
        <Link
          to="/portfolio"
          className="nextPageButton"
          onClick={() => setColor('#65e298')}
        >
          <img src={arrowButton} width="38px" alt="" />
        </Link>
      </animated.div>
    );
  }
};

export default About;