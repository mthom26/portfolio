import React from 'react';

import Button from './Button';

const Project = ({ title, description, image}) => {
  return (
    <div className="project">
      <div className="projectImageContainer">
        <img src={image} width="100%"/>  
      </div>   
      <div className="projectContent">
        <div className="projectContentInner">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="projectButtons">
            <Button>Github</Button>
            <Button>Live Demo</Button>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Project;
