import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation";
// import PlayerMinimized from "./Components/NowPlayingBar/NowPlayingBar";
import AppBar from "./Components/AppBar/AppBar";
import { Content } from "./Containers";

const app = () => {
  return (
    <div id="app">
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div id="content">
            <CssBaseline />
            <AppBar />
            <Content />
            {/* <PlayerMinimized /> */}
            <BottomNavigation />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
};

export default app;
