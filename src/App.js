import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import LuxonUtils from "@date-io/luxon";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation";
import PlayerMinimized from "./Components/NowPlayingBar/NowPlayingBar";
import AppBar from "./Components/AppBar/AppBar";
import Content from "./Containers/Content/Content";

const app = () => {
  return (
    <div id="app">
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div id="content">
              <CssBaseline />
              <AppBar />
              <Content />
              <PlayerMinimized />
              <BottomNavigation />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default app;
