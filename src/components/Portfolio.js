import React from 'react';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

//import ProjectCard from './ProjectCard';
import Project from './Project';

import blogImage from '../images/projectblog.png';
import restaurantImage from '../images/projectrestaurant.png';


const Portfolio = ({ style, setColor }) => {
  return (
    <animated.div style={{ ...style }} className="page portfolio">
      <h1>Portfolio Page</h1>
      <div className="projectsGrid">
        <Project
          image={blogImage}
          title="Gatsby Blog Site"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare iaculis nunc, quis aliquet risus euismod vel. In hac habitasse platea dictumst. Quisque efficitur sed mi et tincidunt. Suspendisse blandit, eros quis consectetur mollis, ligula diam tristique lorem, nec maximus turpis nibh a augue. Aenean at egestas leo. Donec efficitur, lectus vitae consectetur faucibus, nisi purus feugiat mauris, a dignissim odio purus vel orci. Vestibulum vestibulum ultricies lorem at ornare. Nunc quis orci ut mi vehicula congue vitae eget eros."
        />
        <Project
          image={restaurantImage}
          title="Gatsby Restaurant Site"
          description="Sed elementum lorem eget diam tincidunt dignissim. Suspendisse eget consectetur libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec fringilla congue purus. Nunc sed mi venenatis, hendrerit nunc vel, pharetra eros. Donec volutpat tempus dolor, vitae maximus neque vehicula vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare iaculis nunc, quis aliquet risus euismod vel. In hac habitasse platea dictumst. Ligula diam tristique lorem, nec maximus turpis nibh a augue."
        />
      </div>
      <Link
        to="/contact"
        className="nextPageButton"
        onClick={() => setColor('#e2d565')}
      >
        Next
      </Link>
    </animated.div>
  );
};

export default Portfolio;

/*
<ProjectCard
  title="Project 1"
  description="Short description of project..."
/>
<ProjectCard
  title="Project 2"
  description="Short description of project..."
/>
<ProjectCard
  title="Project 3"
  description="Short description of project..."
/>
*/