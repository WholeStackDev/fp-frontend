import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import LuxonUtils from "@date-io/luxon";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "material-ui-pickers";

import theme from "./theme";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation";
import PlayerMinimized from "./Components/NowPlayingBar/NowPlayingBar";
import Account from "./Components/Account/Account";

const app = () => {
  return (
    <div id="app">
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Account />
          <PlayerMinimized />
          <BottomNavigation />
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default app;
