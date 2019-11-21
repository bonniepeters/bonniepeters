import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Header from "../Header/Header";
import Title from "../Title/Title";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Home</h2>
        <Header />
        <Title />
        <ScrollableAnchor id={"about"}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={"work"}>
          <Work />
        </ScrollableAnchor>
        <ScrollableAnchor id={"contact"}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default Home;
