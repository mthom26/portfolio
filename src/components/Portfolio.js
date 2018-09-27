import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

//import ProjectCard from './ProjectCard';
import Project from './Project';

import autoRepairImage from '../images/autobodyrepair.jpg';
import restaurantImage from '../images/projectrestaurant.png';
import arrowButton from '../images/arrowButton.svg';

class Portfolio extends React.Component {

  componentDidMount() {
    const scrollableDiv = document.getElementById('main');
    //console.log(this.scrollableDiv);
    scrollableDiv.scrollTop = 0;
    ReactGA.initialize('UA-107308251-4');
    ReactGA.pageview('/portfolio');
  }

  render() {
    const { setColor, style } = this.props;

    return (
      <animated.div style={{ ...style }} className="page portfolio">
        <h1>Portfolio</h1>
        <div className="projectsGrid">
          <Project
            image={autoRepairImage}
            title="Auto Body Repairs"
            description="This is a single page website built GatsbyJS static site generator. It includes eye catching animations and google maps integration."
            linkAddress="https://autobodyrepairs.now.sh/"
            gitHubAddress="https://github.com/mthom26/car-body-repair"
          />
          <Project
            image={restaurantImage}
            title="Good Eating"
            description="A multi page website built using GatsbyJS including lazy loaded images, google maps and a contact form."
            linkAddress="https://gatsbyrestaurant.netlify.com/"
            gitHubAddress="https://github.com/mthom26/gatsby-restaurant-v2"
          />
        </div>
        <Link
          to="/contact"
          className="nextPageButton"
          onClick={() => setColor('#e2d565')}
        >
          <img src={arrowButton} width="38px" alt="" />
        </Link>
      </animated.div>
    );
  }
};

export default Portfolio;