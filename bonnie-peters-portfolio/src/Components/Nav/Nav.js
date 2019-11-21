import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <h2>Nav</h2>
        <a href='#about'> About </a>
        <a href='#work'> Work </a>
        <a href='#contact'> Contact </a>
        <a href='#'> Blog </a>
      </div>
    );
  }
}

export default Nav;