import React, { Component } from "react";
import "./Cover.css";

class Cover extends Component {
  render() {
    return (
      <div className="test">
        <div className="cover">
          <h1>Bonnie Peters</h1>
          <div className="quote">
            <p>
              “I have no special talents.
              <br />I am only passionately curious.”
            </p>
            <h2>Albert Einstein</h2>
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/bonniepeters"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub |
          </a>
          <a
            href="https://www.linkedin.com/in/bonnieepeters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn |
          </a>
          <a
            href="https://twitter.com/BonnieEPeters"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter |
          </a>
          <a
            href="https://www.instagram.com/bonnie_peters_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    );
  }
}

export default Cover;
