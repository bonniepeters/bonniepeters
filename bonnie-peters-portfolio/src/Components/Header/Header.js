import React, { Component } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import Nav from "../Nav/Nav";


class Header extends Component {
  render() {
    return (
        <div className="header">
            <h2>Header</h2>
            <SocialLinks />
            <Nav />
      </div>
    );
  }
}

export default Header;