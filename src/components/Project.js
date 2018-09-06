import React from 'react';

import Button from './Button';

import githubIcon from '../images/githubGreen.svg';
import linkIcon from '../images/linkGreen.svg';

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
            <Button text="Github" icon={githubIcon} link="#"/>
            <Button text="Live Demo" icon={linkIcon} link="#"/>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Project;
