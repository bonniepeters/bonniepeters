import React, { Component } from "react";
import "./Cover.css";

class Cover extends Component {
  render() {
    return (
      <div className="cover">
        <h1>Bonnie Peters</h1>
        <p>“I have no special talents.<br/>
          I am only passionately curious.”</p>
        <h2>-Albert Einstein</h2>
        <div class="social-links">
          <a href='#'>GitHub |</a>
          <a href='#'>LinkedIn |</a>
          <a href='#'>Twitter |</a>
          <a href='#'>Instagram</a>
        </div>
      </div>
    );
  }
}

export default Cover;