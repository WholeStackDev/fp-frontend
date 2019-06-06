import React from "react";
import Styles from "./Upload.styles";
import Button from "@material-ui/core/Button";

const Upload = props => {
  const classes = Styles();

  const fileSelectHandler = event => {
    console.log(event.target.files);
  };

  return (
    <div className={classes.root}>
      <input
        id="upload-input"
        accept="audio/*"
        name="uploadInput"
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

export default Upload;
