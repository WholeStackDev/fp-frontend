const styles = theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    textAlign: "center"
  },
  box: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.primary,
    margin: "2rem"
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  paper: {
    padding: "1rem"
  }
});

export default styles;
