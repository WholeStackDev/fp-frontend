import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles(theme => ({
  title: {
    // margin: theme.spacing(2),
    textAlign: "center",
    position: "relative",
    // left: "24px",
    flexGrow: 1
  },
  appBar: {
    // height: "4rem",
    boxShadow: "none"
  },
  disabledBackButton: {
    opacity: "0"
  },
  // accountIconButton: {
  //   position: "fixed",
  //   right: "1.25rem",
  //   top: "1.25rem"
  // },
  accountIcon: {
    fill: "rgba(0, 0, 0, 0.54)"
  }
}));

export default Styles;
