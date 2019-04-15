import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import axios from "axios";
import * as mm from "music-metadata-browser";
import Track from "../Track/track";
import { Input, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  }
});

const upload = props => {
  // const [file, setFile] = useState(null);
  const [trackData, setTrackData] = useState(null);

  const fileSelectHandler = event => {
    var fileData = event.target.files[0];
    mm.parseBlob(fileData).then(metadata => {
      console.log(fileData);
      console.log(metadata);
      setTrackData({
        fileName: fileData.name,
        title: metadata.common.title,
        speaker: metadata.common.artist,
        event: "",
        eventYear: metadata.common.year,
        fileSize: fileData.size,
        duration: metadata.format.duration
      });
    });
  };

  // const submitFileHandler = () => {
  //   const data = new FormData();
  //   data.append("file", file);
  //   axios
  //     .post("https://localhost:44308/api/values", data)
  //     .then(results => {
  //       console.log(results.status);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const RenderTracks = () => {
    if (trackData) {
      return (
        <div id="tracks">
          {/* <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
            // anchor="left"
          > */}
          {/* <div className={classes.toolbar} /> */}
          <List>
            {["Item 1", "Item 2"].map((text, index) => (
              <ListItem>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* </Drawer> */}
          <Track track={trackData} />
        </div>
      );
    } else {
      return null;
    }
  };

  const UploadButton = () => {
    if (trackData) {
      return (
        <Button variant="contained" color="primary">
          Upload
        </Button>
      );
    } else {
      return null;
    }
  };

  const { classes } = props;

  return (
    <Grid container className={classes.root} direction="column" spacing={16}>
      <Grid item xs={12} className={classes.box}>
        <input
          id="upload-input"
          accept="audio/*"
          name="uploadInput"
          type="file"
          multiple
          onChange={fileSelectHandler}
          style={{ display: "none" }}
        />
        <label htmlFor="upload-input">
          <Button
            raised
            component="span"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Select File
          </Button>
        </label>
      </Grid>
      {/* <Grid item xs={2} className={classes.box} /> */}
      <Grid item xs={8} className={classes.box}>
        <RenderTracks />
      </Grid>
      <Grid item xs={12} className={classes.box}>
        <UploadButton />
      </Grid>
    </Grid>
  );
};

upload.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(upload);
