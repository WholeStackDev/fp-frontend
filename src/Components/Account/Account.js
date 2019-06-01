import React from "react";
import Styles from "./Account.styles";

import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import MenuNavigation from "../MenuNavigation/MenuNavigation";
import AppBar from "@material-ui/core/AppBar";

function Account() {
  const classes = Styles();

  return (
    <Fragment>
      <AppBar position="sticky" color="inherit" className={classes.appBar}>
        <Typography variant="h6" gutterBottom className={classes.header}>
          Account
        </Typography>
      </AppBar>
      <MenuNavigation url="/upload" label="Upload" first />
      <MenuNavigation url="/my-uploads" label="My Uploads" />
      <p style={{ padding: "2rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        vehicula nisl metus, sed placerat nunc lacinia sit amet. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Donec auctor leo non diam facilisis auctor. Integer
        sollicitudin sem est, eget rhoncus augue finibus nec. Vestibulum feugiat
        nisi finibus elit sollicitudin, sit amet accumsan velit scelerisque. Ut
        ac neque pulvinar, scelerisque ipsum in, commodo urna. Curabitur
        interdum orci neque, eget lobortis lorem ultrices eget. Ut egestas
        venenatis purus vel egestas. Sed euismod lacinia elementum. Integer ac
        nunc neque. Fusce sed mauris sagittis, dignissim nisl at, pharetra odio.
        Praesent turpis arcu, pharetra vitae aliquet vitae, sollicitudin eget
        ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Integer imperdiet enim ut magna tristique, quis
        facilisis ex volutpat. Integer vestibulum rutrum risus at lobortis.
        Integer facilisis libero lacus, eu malesuada enim laoreet vel. Sed
        molestie, lacus et mollis dapibus, nulla eros iaculis ligula, sit amet
        feugiat est risus varius tellus.
      </p>
    </Fragment>
  );
}

export default Account;
