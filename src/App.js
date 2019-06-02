import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import LuxonUtils from "@date-io/luxon";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { BrowserRouter, Route } from "react-router-dom";

import theme from "./theme";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation";
import PlayerMinimized from "./Components/NowPlayingBar/NowPlayingBar";
import Account from "./Components/Account/Account";

const app = () => {
  return (
    <div id="app">
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <div id="content">
              <Route path="/account" component={Account} />
              {/* The div below is a hack to account for the spacing of the bottom nav and now playing bar */}
              <div style={{ height: "7rem" }} />
            </div>
            <PlayerMinimized />
            <BottomNavigation />
          </BrowserRouter>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default app;
