import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Styles from "./AppBar.styles";
import { withRouter } from "react-router";

import MuiAppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";

const AppBar = props => {
  const classes = Styles();
  // I'm using accountIconWidth to store the width of the account icon so I can
  // center the title.
  // const [accountIconButtonWidth, setAccountIconButtonWidth] = useState(24);

  const goBack = () => {
    props.history.goBack();
  };

  // useEffect(() => {
  //   setAccountIconButtonWidth(
  //     document.getElementById("account-icon-button").clientWidth
  //   );
  // });

  let backButton;

  if (props.isTopLevelPage) {
    backButton = (
      <IconButton
        disabled
        className={classes.disabledBackButton}
        onClick={goBack}
        id="back-button"
      >
        <ArrowBackIcon id="back-icon" />
      </IconButton>
    );
  } else {
    backButton = (
      <IconButton onClick={goBack} id="back-button">
        <ArrowBackIcon id="back-icon" />
      </IconButton>
    );
  }

  return (
    <MuiAppBar position="sticky" color="inherit" className={classes.appBar}>
      <Toolbar>
        {backButton}
        <Typography
          variant="subtitle1"
          gutterBottom
          className={classes.title}
          // style={{
          //   left: accountIconButtonWidth / 2 + "px"
          // }}
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
    pageName: state.general.pageName,
    isTopLevelPage: state.general.isTopLevelPage
  };
};

export default withRouter(connect(mapStateToProps)(AppBar));
