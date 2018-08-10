import React from 'react';

import ProjectCard from './ProjectCard';

const Portfolio = ({ style }) => {
  return (
    <div style={{ ...style }} className="page portfolio">
      <h1>Portfolio Page</h1>
      <div className="projectsGrid">
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
      </div>
    </div>
  );
};

export default Portfolio;