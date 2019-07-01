import React, { Fragment, useState } from "react";
import { UploadFileSelector, TrackEdit } from "../../Components";
import { uploadTrack } from "./upload-utils";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const Upload = () => {
  const [fileToUpload, setFileToUpload] = useState(null);
  const [trackToUpload, setTrackToUpload] = useState(null);

  const onFileSelected = files => {
    setTrackToUpload({
      fileName: files[0].fileName,
      title: files[0].title,
      speaker: files[0].speaker,
      event: files[0].event,
      eventYear: files[0].eventYear,
      eventMonth: "",
      eventDay: ""
    });
    setFileToUpload(files[0].file);
  };

  const onTrackChange = (field, newValue) => {
    setTrackToUpload({ ...trackToUpload, [field]: newValue });
  };

  const submit = () => {
    uploadTrack(trackToUpload, fileToUpload);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>
        <UploadFileSelector onFileSelected={onFileSelected} />
      </Box>
      {trackToUpload !== null && (
        <Fragment>
          <Box>
            <TrackEdit track={trackToUpload} onTrackChange={onTrackChange} />
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={submit}>
              Submit
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default Upload;
