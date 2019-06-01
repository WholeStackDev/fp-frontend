import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  root: {
    height: "3.5rem",
    borderBottom: "1px solid #EEE",
    marginLeft: "1rem",
    marginRight: "1rem",
    width: "calc(100% - 2rem)"
  },
  first: {
    borderTop: "1px solid #EEE"
  },
  typography: {
    marginLeft: "1rem",
    textDecoration: "none",
    textAlign: "left"
  },
  grid: {
    alignItems: "center",
    height: "100%"
  },
  arrow: {
    fill: "#EEE"
  }
}));

export default styles;
