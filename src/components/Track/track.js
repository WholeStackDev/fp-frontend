import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { InlineDatePicker } from "material-ui-pickers";
import { DateTime } from "luxon";
import getByteSize from "../../utils/getByteSize";
import getDuration from "../../utils/getDuration";

const track = props => {
  useEffect(() => {
    setFileName(props.track.fileName);
    setTitle(props.track.title);
    setSpeaker(props.track.speaker);
    setEvent(props.track.event);
    setEventYear(
      props.track.eventYear ? DateTime.local(props.track.eventYear) : null
    );
    setFileSize(getByteSize(props.track.fileSize));
    setDuration(getDuration(props.track.duration));
  }, []);

  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [event, setEvent] = useState("");
  const [eventYear, setEventYear] = useState(null);
  const [fileSize, setFileSize] = useState("");
  const [duration, setDuration] = useState("");

  const titleChangeHandler = event => {
    setTitle(event.target.value);
  };

  const speakerChangeHandler = event => {
    setSpeaker(event.target.value);
  };

  const eventChangeHandler = event => {
    setEvent(event.target.value);
  };

  return (
    <div id="track">
      <TextField
        id="file-name"
        label="File Name"
        variant="outlined"
        margin="normal"
        fullWidth
        disabled
        value={fileName}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        margin="normal"
        fullWidth
        value={title}
        onChange={titleChangeHandler}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="speaker"
        label="Speaker"
        variant="outlined"
        margin="normal"
        fullWidth
        value={speaker}
        onChange={speakerChangeHandler}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="event"
        label="Event"
        variant="outlined"
        margin="normal"
        fullWidth
        value={event}
        onChange={eventChangeHandler}
        InputLabelProps={{
          shrink: true
        }}
      />
      <InlineDatePicker
        id="event-year"
        value={eventYear}
        onChange={setEventYear}
        keyboard
        clearable
        views={["year"]}
        margin="normal"
        variant="outlined"
        label="Event Year"
        fullWidth
        format="yyyy"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="file-size"
        label="File Size"
        variant="outlined"
        margin="normal"
        fullWidth
        disabled
        value={fileSize}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="duration"
        label="Duration"
        variant="outlined"
        margin="normal"
        fullWidth
        disabled
        value={duration}
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
};

export default track;
