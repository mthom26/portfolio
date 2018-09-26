import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

//import ProjectCard from './ProjectCard';
import Project from './Project';

import autoRepairImage from '../images/autobodyrepair.jpg';
import restaurantImage from '../images/projectrestaurant.png';
import arrowButton from '../images/arrowButton.svg';

class Portfolio extends React.Component {
  
  componentDidMount() {
    const scrollableDiv = document.getElementById('main');
    console.log(scrollableDiv);
    scrollableDiv.scrollTop = 0;
  }

  render() {
    const { setColor, style } = this.props;
    return (
      <animated.div style={{ ...style }} id="portfolio" className="page portfolio">
        <h1>Portfolio</h1>
        <div className="projectsGrid">
          <Project
            image={autoRepairImage}
            title="Auto Body Repairs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare iaculis nunc, quis aliquet risus euismod vel. In hac habitasse platea dictumst. Quisque efficitur sed mi et tincidunt. Suspendisse blandit, eros quis consectetur mollis, ligula diam tristique lorem, nec maximus turpis nibh a augue. Aenean at egestas leo."
            linkAddress="https://autobodyrepairs.now.sh/"
            gitHubAddress="https://github.com/mthom26/car-body-repair"
          />
          <Project
            image={restaurantImage}
            title="Gatsby Restaurant Site"
            description="Sed elementum lorem eget diam tincidunt dignissim. Suspendisse eget consectetur libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec fringilla congue purus. Nunc sed mi venenatis, hendrerit nunc vel, pharetra eros."
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