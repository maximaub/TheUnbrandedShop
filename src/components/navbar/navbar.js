import React, { Component } from "react";
import { withStyles, AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import Style from "./css.js";
import ShoppingBasketLogo from "@material-ui/icons/ShoppingBasket";
import { BrowserRouter as Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.navbar} position="static">
          <Toolbar style={{ padding: 0 }}>
            <Typography className={classes.title}>{this.props.title}</Typography>
            <IconButton className={classes.cart} color="inherit">
              <ShoppingBasketLogo className={classes.cartLogo} />
            </IconButton>
            <Link to="/aboutus">
              <Button className={classes.info} color="inherit">
                <Typography className={classes.infoText}>ABOUT US</Typography>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(Style)(Navbar);
