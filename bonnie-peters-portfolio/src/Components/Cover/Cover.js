import React, { Component } from "react";
import "./Cover.css";

class Cover extends Component {
  render() {
    return (
      <div className="cover">
        <h1>Bonnie Peters</h1>
        <div className="quote">
        <p>“I have no special talents.<br/>
          I am only passionately curious.”</p>
          <h2>Albert Einstein</h2>
          </div>
        <div className="social-links">
          <a target="_blank" href='https://github.com/bonniepeters'>GitHub |</a>
          <a target="_blank" href='https://www.linkedin.com/in/bonnieepeters/'>LinkedIn |</a>
          <a target="_blank" href='https://twitter.com/BonnieEPeters'>Twitter |</a>
          <a target="_blank" href='https://www.instagram.com/bonnie_peters_/'>Instagram</a>
        </div>
      </div>
    );
  }
}

export default Cover;