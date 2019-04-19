import React, { useState } from "react";
import PropTypes from "prop-types";
// import axios from "axios";
import * as mm from "music-metadata-browser";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./upload.styles";
import Tracks from "./Tracks/Tracks";

const upload = props => {
  // const [file, setFile] = useState(null);
  const [trackData, setTrackData] = useState(null);

  const fileSelectHandler = event => {
    const files = event.target.files;
    let filesArray = [];

    Object.keys(files).forEach(file => {
      mm.parseBlob(files[file]).then(metadata => {
        filesArray.push({
          fileName: files[file].name,
          title: metadata.common.title,
          speaker: metadata.common.artist,
          event: "",
          eventYear: metadata.common.year,
          fileSize: files[file].size,
          duration: metadata.format.duration
        });
        console.log(filesArray);
        setTrackData([...filesArray]);
      });
    });

    // var fileData = event.target.files[0];

    // mm.parseBlob(fileData).then(metadata => {
    //   setTrackData({
    //     fileName: fileData.name,
    //     title: metadata.common.title,
    //     speaker: metadata.common.artist,
    //     event: "",
    //     eventYear: metadata.common.year,
    //     fileSize: fileData.size,
    //     duration: metadata.format.duration
    //   });
    // });
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
            raised="true"
            component="span"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Select File
          </Button>
        </label>
      </Grid>
      <Grid item xs={8} className={classes.box}>
        <Tracks tracks={trackData} />
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
