import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import axios from "axios";
import * as mm from "music-metadata-browser";
import Track from "../Track/track";
import { Input, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    textAlign: "center"
  },
  box: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.primary
  },
  control: {
    padding: theme.spacing.unit * 2
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

  const RenderTrack = () => {
    if (trackData) {
      return <Track track={trackData} />;
    } else {
      return null;
    }
  };

  const { classes } = props;

  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12} className={classes.box}>
        <Input type="file" name="file" onChange={fileSelectHandler} />
      </Grid>
      <Grid item xs={2} className={classes.box} />
      <Grid item xs={8} className={classes.box}>
        <RenderTrack />
      </Grid>
      <Grid item xs={12} className={classes.box}>
        <Button variant="outlined">Upload</Button>
        {/* <Button onClick={submitFileHandler}>Upload</Button> */}
      </Grid>
    </Grid>
  );
};

upload.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(upload);
