import React from 'react';

const ProjectCard = () => {
  return (
    <div className="projectCard">
      <div className="projectCardContent">
        <div >
          <img className="projectCardImage" src="https://picsum.photos/200/?random" />
        </div>
        <div className="projectCardText">
          <h3>Project Name</h3>
          <p>Short project description...</p>
        </div>
      </div>
      <div className="projectCardBar" />
    </div>
  );
};

export default ProjectCard;
