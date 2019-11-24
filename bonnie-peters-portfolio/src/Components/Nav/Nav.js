import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <a className="nav-link" href='#about'>About</a>
        <a className="nav-link" href='#work'>Work</a>
        <a href='#home'><img
          src={process.env.PUBLIC_URL + '/B_P Logo.png'}
          alt="logo"
          className="logo"
        /></a>
        <a className="nav-link" href='#contact'>Contact</a>
        <a className="nav-link" href='#'>Blog</a>
        </nav>
    );
  }
}

export default Nav;