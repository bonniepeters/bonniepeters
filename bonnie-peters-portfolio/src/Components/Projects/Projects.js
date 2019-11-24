import React, { Component } from "react";
import listOfProjects from '../../projects.json';

class Projects extends Component {
  render() {
    const projects = listOfProjects.map(project => {
      return (
      <>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
          <li>
            <a href={project.links.frontend}>
              Front-End Github Repository
            </a>
          </li>
          <li>
            <a href={project.links.backend}>
              Back-End Github Repository
            </a>
          </li>
          <li>
            <a href={project.links.live}>
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
