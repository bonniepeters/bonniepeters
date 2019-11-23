import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <a href='#about'>About</a>
        <a href='#work'>Work</a>
        <img
          src={process.env.PUBLIC_URL + '/BonsLogo.png'}
          alt="logo"
          className="logo"
        />
        <a href='#contact'>Contact</a>
        <a href='#'>Blog</a>
        </nav>
    );
  }
}

export default Nav;