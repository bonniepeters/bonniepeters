import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Blog from "./Components/Blog/Blog";
import { Route, Switch } from "react-router-dom";
import Sticky from "react-sticky-el";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sticky>
          <Header />
        </Sticky>
        <main>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/blog" component={Blog} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
