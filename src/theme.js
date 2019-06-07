import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61dbfb",
      light: "#9affff",
      dark: "#0fa9c8"
    },
    secondary: {
      main: "#49599e",
      light: "#7a86cf",
      dark: "#12306f"
    },
    background: {
      default: "#FFF"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;
