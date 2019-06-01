import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  header: {
    margin: theme.spacing(2),
    textAlign: "center"
    // lineHeight: "3rem"
  },
  appBar: {
    height: "4rem",
    boxShadow: "none"
  }
}));

export default styles;
