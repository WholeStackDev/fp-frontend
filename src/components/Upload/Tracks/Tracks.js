import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Tracks.style";
import Track from "../../Track/track";

const tracks = props => {
  const { classes } = props;
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  if (props.tracks) {
    const changeSelectedTrack = selectedIndex => {
      setSelectedTrackIndex(selectedIndex);
      setSelectedTrack(props.tracks[selectedIndex]);
    };

    const TrackList = props.tracks.map((text, index) => {
      return (
        <ListItem
          key={index}
          button
          selected={index === selectedTrackIndex}
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
            <Track track={selectedTrack} />
          </Grid>
        </Grid>
      </Paper>
    );
  } else {
    return null;
  }
};

export default withStyles(styles)(tracks);
