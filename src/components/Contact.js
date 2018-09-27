import React from 'react';
import { animated } from 'react-spring';
import ReactGA from 'react-ga';

class Contact extends React.Component {
  componentDidMount() {
    const scrollableDiv = document.getElementById('main');
    //console.log(this.scrollableDiv);
    scrollableDiv.scrollTop = 0;
    ReactGA.initialize('UA-107308251-4');
    ReactGA.pageview('/contact');
  }

  render() {
    const { style } = this.props;
    
    return (
      <animated.div style={{ ...style }} className="page contact">
        <div className="contactContent">
          <h1>Contact Me</h1>
          <p>If you want to discuss your project just send me an email!</p>
          <a
            className="contactEmail"
            href="mailto:michaelthompson.code@gmail.com"
          >
            michaelthompson.code@gmail.com
          </a>
        </div>
      </animated.div>
    );
  }
};

export default Contact;
