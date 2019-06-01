import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: "3.5rem",
    borderTop: "1px solid #CCC"
  },
  trackName: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "0.75rem",
    color: "#444"
  },
  toolbar: {
    backgroundColor: "#EEE"
  },
  margin: {
    margin: theme.spacing(-0.5)
  }
}));

export default styles;
