import React, { useEffect } from "react";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";
import { connect } from "react-redux";
import { ADD_TRACK } from "../../Store/Actions";
import * as mm from "music-metadata-browser";

import Styles from "./Upload.styles";
import Button from "@material-ui/core/Button";

const Upload = props => {
  const classes = Styles();

  const fileSelectHandler = event => {
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
          duration: meta.format.duration || 0,
          file: file
        });
      }
      props.addTrack(results);
      props.history.push({ pathname: "track/edit" });
    })(event.target.files);
  };

  useEffect(() => {
    PageName("Upload");
    IsTopLevelPage(false);
  });

  return (
    <div className={classes.root}>
      <input
        id="upload-input"
        accept="audio/*"
        name="upload"
        type="file"
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
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTrack: track => dispatch({ type: ADD_TRACK, trackToAdd: track })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Upload);
