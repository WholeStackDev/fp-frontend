import React from "react";
import Styles from "./Account.styles";

import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";

function Account() {
  const classes = Styles();

  return (
    <Fragment>
      <Typography variant="h5" gutterBottom className={classes.margin}>
        Account
      </Typography>
    </Fragment>
  );
}

export default Account;
