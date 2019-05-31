const styles = theme => ({
  root: {
    display: "flex"
  },
  tracksWrapper: {
    padding: "3rem"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 240,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: 240
  },
  trackSelectionWrapper: {
    // padding: "1rem",
    marginRight: "2rem"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: "2rem"
  }
});

export default styles;
