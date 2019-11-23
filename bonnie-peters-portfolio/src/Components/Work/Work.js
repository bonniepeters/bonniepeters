import React, { Component } from "react";
import Project1 from "../Project1/Project1";
import Project2 from "../Project2/Project2";
import Project3 from "../Project3/Project3";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <h2>Work</h2>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>
    );
  }
}

export default Work;