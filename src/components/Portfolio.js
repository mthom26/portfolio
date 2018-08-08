import React from 'react';

import ProjectCard from './ProjectCard';

const Portfolio = ({ style }) => {
  return (
    <div style={{ ...style }} className="page">
      <h1>Portfolio Page</h1>
      <div className="projectsGrid">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Portfolio;