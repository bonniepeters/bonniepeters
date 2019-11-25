import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <a className="nav-link" href='/#about'>About</a>
        <a className="nav-link" href='/#work'>Work</a>
        <a href='/#home'>
          <img
          src={process.env.PUBLIC_URL + '/images/B_P Logo.png'}
          alt="logo"
          className="logo"
        />
        </a>
        <a className="nav-link" href="mailto:bonnie.e.peters@gmail.com">Contact</a>
        <Link className="nav-link" to='/blog'>Blog</Link>
        </nav>
    );
  }
}

export default Nav;