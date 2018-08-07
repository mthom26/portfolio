import React from 'react';

const ProjectCard = () => {
  return (
    <div className="projectCard">
      <div className="projectCardContent">
        <div>
          <img src="https://picsum.photos/200/?random" />
        </div>
        <div>
          <h3>Project Name</h3>
          <p>Short project description...</p>
        </div>
      </div>
      <div className="projectCardBar" />
    </div>
  );
};

export default ProjectCard;
