import React, { Component } from "react";
import listOfProjects from '../../projects.json';

class Projects extends Component {
  render() {
    const projects = listOfProjects.map(project => {
      return (
        <>
          <a rel="noopener noreferrer" href={project.links.live} target="_blank" >
          <img
          src={process.env.PUBLIC_URL + project.image}
            alt="project"
            className="project-image"
            
            />
            </a>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
          <li>
            <a rel="noopener noreferrer" href={project.links.frontend} target="_blank" >
              Front-End Github Repository
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href={project.links.backend} target="_blank" >
              Back-End Github Repository
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href={project.links.live} target="_blank" >
              Deployed Application
            </a>
          </li>
        </ul>
      </>
      );
    });
    return (
      <div className="project">
        {projects}
      </div>
    );
  }
}

export default Projects;
