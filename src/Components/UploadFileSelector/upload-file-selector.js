import React from "react";
import Button from "@material-ui/core/Button";
import { fileSelectHandler } from "./upload-file-selector-utils";

const UploadFileSelector = props => {
  return (
    <div>
      <input
        id="upload-input"
        accept="audio/*"
        name="upload"
        type="file"
        onChange={event => fileSelectHandler(event, props.onFileSelected)}
        style={{ display: "none" }}
      />
      <label htmlFor="upload-input">
        <Button raised="true" component="span" variant="contained" color="primary">
          Select File
        </Button>
      </label>
    </div>
  );
};

export default UploadFileSelector;
