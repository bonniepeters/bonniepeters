import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a target="_blank" href="https://github.com/bonniepeters">
          <img
            src={process.env.PUBLIC_URL + "/images/GitHub.png"}
            alt="GitHub Logo"
            className="social-image"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/bonnieepeters/">
          <img
            src={process.env.PUBLIC_URL + "/images/LinkedIn.png"}
            alt="LinkedIn Logo"
            className="social-image"
            width="30px"
          />
        </a>
        <a target="_blank" href="https://twitter.com/BonnieEPeters">
          <img
            src={process.env.PUBLIC_URL + "/images/Twitter.png"}
            alt="Twitter Logo"
            className="social-image"
          />
        </a>
        <a target="_blank" href="https://www.instagram.com/bonnie_peters_/">
          <img
            src={process.env.PUBLIC_URL + "/images/Instagram.png"}
            alt="Instagram Logo"
            className="social-image"
          />
        </a>
      </div>
    );
  }
}

export default Footer;
