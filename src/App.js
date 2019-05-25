import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home.js";
import AboutUs from "./pages/aboutus/aboutus.js";
import Style from "./css.js";
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar title="(The Unbranded Shop)" />
        <Router>
          <div className={classes.app}>
            <Route path="/" exact component={Home} />
            <Route path="/aboutus" component={AboutUs} />
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(Style)(App);
