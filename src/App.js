import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Upload from "./components/Upload/upload";
import LuxonUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import Header from "./components/Layout/header";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey
  },
  typography: {
    useNextVariants: true
  }
});

const app = () => {
  return (
    <div id="app">
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Upload />
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default app;
