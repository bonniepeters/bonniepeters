import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Cover from "../Cover/Cover";
import About from "../About/About";
import Work from "../Work/Work";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -63 });

class Home extends Component {
  render() {
    return (
      <div className="home">
        <ScrollableAnchor id={"home"}>
          <Cover />
        </ScrollableAnchor>
        <div className="content">
        <ScrollableAnchor id={"about"}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={"work"}>
          <Work />
          </ScrollableAnchor>
          </div>
      </div>
    );
  }
}

export default Home;
