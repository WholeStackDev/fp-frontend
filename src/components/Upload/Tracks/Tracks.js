import React from "react";
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

  if (props.trackData) {
    return (
      <Paper id="tracks" className={classes.paper}>
        <Grid container>
          <Grid item xs={1}>
            <List>
              {["1", "2"].map((text, index) => (
                <ListItem key={index}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={11}>
            <Track track={props.trackData} />
          </Grid>
        </Grid>
      </Paper>
    );
  } else {
    return null;
  }
};

export default withStyles(styles)(tracks);
