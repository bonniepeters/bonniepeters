import React, { Component } from "react";

class Project2 extends Component {
  render() {
    return (
      <div className="project">
        <h3>Seattle Bucket List</h3>
        <p>
          This Express app was designed with a specific place and user in mind:
          Seattle and the The Peters'(Lucas and Bonnie). It allows us and other
          guests to add details about places and activities we can checkout in
          the Seattle area.
        </p>
        <ul>
          <li>
            <a href="https://github.com/bonniepeters/Seattle-Bucket-List">
              Github Repository
            </a>
          </li>
          <li>
            <a href="https://seattle-bucket-list.herokuapp.com">
              Deployed Application
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Project2;
