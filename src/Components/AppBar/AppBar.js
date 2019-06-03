import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./AppBar.styles";

import MuiAppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";

const AppBar = props => {
  const classes = Styles();
  // I'm using accountIconWidth to store the width of the account icon so I can
  // center the title.
  const [accountIconButtonWidth, setAccountIconButtonWidth] = useState(24);

  useEffect(() => {
    setAccountIconButtonWidth(
      document.getElementById("account-icon-button").clientWidth
    );
  });

  return (
    <MuiAppBar position="sticky" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.title}
          style={{
            left: accountIconButtonWidth / 2 + "px"
          }}
        >
          {props.pageName}
        </Typography>
        <IconButton component={Link} to="/account" id="account-icon-button">
          <AccountIcon className={classes.accountIcon} id="account-icon" />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

const mapStateToProps = state => {
  return {
    pageName: state.general.pageName
  };
};

export default connect(mapStateToProps)(AppBar);
