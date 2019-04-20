import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Tracks.style";
import Track from "../../Track/Track";
import { connect } from "react-redux";
import * as actionTypes from "../../../Store/Actions";

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
        <ListItem
          key={index}
          button
          selected={index === props.selectedTrackIndex}
          onClick={() => changeSelectedTrack(index)}
        >
          <ListItemText primary={index + 1} />
        </ListItem>
      );
    });

    return (
      <Paper id="tracks" className={classes.paper}>
        <Grid container>
          <Grid item xs={1}>
            <List>{TrackList}</List>
          </Grid>
          <Grid item xs={11}>
            <Track />
          </Grid>
        </Grid>
      </Paper>
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
