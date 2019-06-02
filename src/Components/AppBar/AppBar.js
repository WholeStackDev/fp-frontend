import React, { useState, useEffect } from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Styles from "./AppBar.styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";

const AppBar = props => {
  const classes = Styles();
  // I'm using accountIconWidth to store the width of the account icon so I can
  // move the
  const [accountIconButtonWidth, setAccountIconButtonWidth] = useState(24);

  useEffect(() => {
    setAccountIconButtonWidth(
      document.getElementById("account-icon-button").clientWidth
    );
  });

  const clickHandler = () => {
    // console.log(document.getElementById("account-icon").clientWidth);
  };

  return (
    <MuiAppBar position="sticky" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.title}
          style={{
            left: accountIconButtonWidth / 2 + "px"
          }}
        >
          {props.title}
        </Typography>
        <IconButton onClick={clickHandler} id="account-icon-button">
          <AccountIcon className={classes.accountIcon} id="account-icon" />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
