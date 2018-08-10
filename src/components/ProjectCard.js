import React from 'react';

const ProjectCard = ({ title, description}) => {
  return (
    <div className="projectCard">
      <div className="projectCardContent">
        <div >
          <img className="projectCardImage" src="https://picsum.photos/200/?random" />
        </div>
        <div className="projectCardText">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="projectCardBar" />
    </div>
  );
};

export default ProjectCard;
