import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "../Header/Header";
import Cover from "../Cover/Cover";
import About from "../About/About";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import Sticky from "react-sticky-el";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -63 });

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Sticky>
          <Header />
        </Sticky>
        <ScrollableAnchor id={"home"}>
            <Cover />
          </ScrollableAnchor>
        <main>
          <ScrollableAnchor id={"about"}>
            <About />
          </ScrollableAnchor>
          <ScrollableAnchor id={"work"}>
            <Work />
          </ScrollableAnchor>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
