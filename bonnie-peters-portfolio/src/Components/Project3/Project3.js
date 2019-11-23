import React, { Component } from "react";

class Project3 extends Component {
  render() {
    return (
      <div className="project">
        <h3>City Fyndr</h3>
        <p>
          City Fyndr is a full-stack MERN (MongoDB, Express.js, React.js,
          Node.js) application with full CRUD capability. It allows users to
          explore relevant data about the top 50 cities to live in the United
          States.
        </p>
        <ul>
          <li>
            <a href="https://github.com/wdixon2186/City-Search-Front-End">
              Front-End Github Repository
            </a>
          </li>
          <li>
            <a href="https://github.com/Emme313/p3-city-search-project-backend">
              Back-End Github Repository
            </a>
          </li>
          <li>
            <a href="https://wdixon2186.github.io/City-Search-Front-End/#/">
              Deployed Application
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Project3;
