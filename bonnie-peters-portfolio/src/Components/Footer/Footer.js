import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img
          src={process.env.PUBLIC_URL + "/GitHub.png"}
          alt="GitHub Logo"
          className="social-image"
        />
        <img
          src={process.env.PUBLIC_URL + "/LinkedIn.png"}
          alt="LinkedIn Logo"
          className="social-image"
        />
        <img
          src={process.env.PUBLIC_URL + "/Twitter.png"}
          alt="Twitter Logo"
          className="social-image"
        />
        <img
          src={process.env.PUBLIC_URL + "/Instagram.png"}
          alt="Instagram Logo"
          className="social-image"
        />
      </div>
    );
  }
}

export default Footer;
