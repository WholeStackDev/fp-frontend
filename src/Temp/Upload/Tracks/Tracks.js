import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Tracks.style";
import Track from "../../Track/Track";
import { connect } from "react-redux";
import * as actionTypes from "../../../Store/Actions";
import PropTypes from "prop-types";

const tracks = props => {
  const { classes } = props;
  // const [selectedTrack, setSelectedTrack] = useState(null);
  // const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  if (props.tracks.length > 0) {
    const changeSelectedTrack = selectedIndex => {
      // setSelectedTrackIndex(selectedIndex);
      // setSelectedTrack(props.tracks[selectedIndex]);
      props.setSelectedTrackIndex(selectedIndex);
    };

    const TrackList = props.tracks.map((track, index) => {
      return (
        <MenuItem
          key={index}
          button
          selected={index === props.selectedTrackIndex}
          onClick={() => changeSelectedTrack(index)}
          disableTypography
        >
          <ListItemText primary={"Track " + (index + 1)} disableTypography />
        </MenuItem>
      );
    });

    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
      setValue(newValue);
    }

    function TabContainer(props) {
      return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
          {props.children}
        </Typography>
      );
    }

    TabContainer.propTypes = {
      children: PropTypes.node.isRequired
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>

      // <Paper id="tracks" className={classes.tracksWrapper}>
      //   <Grid container>
      //     <Grid item xs={3}>
      //       <Paper className={classes.trackSelectionWrapper}>
      //         <List>{TrackList}</List>
      //       </Paper>
      //     </Grid>
      //     <Grid item xs={9}>
      //       <Track />
      //     </Grid>
      //   </Grid>
      // </Paper>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    tracks: state.upload.tracks,
    selectedTrackIndex: state.upload.selectedTrackIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSelectedTrackIndex: index =>
      dispatch({
        type: actionTypes.SET_SELECTED_TRACK_INDEX,
        selectedTrack: index
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(tracks));
