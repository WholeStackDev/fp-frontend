import React from "react";
import Styles from "./MenuNavigation.styles";

import { withRouter } from "react-router";
import { Typography, Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Arrow from "@material-ui/icons/ArrowForwardIos";
import ButtonBase from "@material-ui/core/ButtonBase";

const MenuNavigation = props => {
  const classes = Styles();

  const clickHandler = () => {
    setTimeout(() => {
      props.history.push({ pathname: props.url });
    }, 300);
  };

  const first = props.first ? classes.first : null;

  return (
    <ButtonBase className={classes.root + " " + first} onClick={clickHandler}>
      <Grid container className={classes.grid}>
        <Grid item xs={11}>
          <Typography className={classes.typography}>
            <Link color="secondary">{props.label}</Link>
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Arrow className={classes.arrow} />
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

export default withRouter(MenuNavigation);
