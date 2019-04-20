import React from "react";
import PropTypes from "prop-types";
// import axios from "axios";
import * as mm from "music-metadata-browser";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./Upload.styles";
import Tracks from "./Tracks/Tracks";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/Actions";

const upload = props => {
  const fileSelectHandler = event => {
    props.clearTracks();

    (async files => {
      let id = 0;
      const results = [];
      for (const file of files) {
        id++;
        let meta = await mm.parseBlob(file);
        results.push({
          id: id,
          fileName: file.name || "",
          title: meta.common.title || "",
          speaker: meta.common.artist || "",
          event: "",
          eventYear: meta.common.year || null,
          fileSize: file.size || 0,
          duration: meta.format.duration || 0
        });
      }
      props.addTrack(results);
    })(event.target.files);
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
    if (props.tracks.length > 0) {
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
            Select Files
          </Button>
        </label>
      </Grid>
      <Grid item xs={8} className={classes.box}>
        <Tracks tracks={props.tracks} />
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

const mapStateToProps = state => {
  return {
    tracks: state.upload.tracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTrack: track =>
      dispatch({ type: actionTypes.ADD_TRACK, trackToAdd: track }),
    clearTracks: () => dispatch({ type: actionTypes.CLEAR_TRACKS })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(upload));
