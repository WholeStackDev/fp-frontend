import React from "react";
import { TextField } from "@material-ui/core";
import { InlineDatePicker } from "material-ui-pickers";
import { DateTime } from "luxon";
import getFileSize from "../../Utilities/GetFileSize";
import getDuration from "../../Utilities/GetDuration";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/Actions";

const track = props => {
  if (props.tracks.length > 0) {
    const changeHandler = event => {
      props.editTrack({
        ...props.tracks[props.selectedTrackIndex],
        [event.target.id]: event.target.value
      });
    };

    const eventYearChangeHandler = event => {
      const year =
        event.target && event.target.value ? event.target.value : event.c.year;
      props.editTrack({
        ...props.tracks[props.selectedTrackIndex],
        eventYear: year
      });
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
          value={props.tracks[props.selectedTrackIndex].fileName}
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
          value={props.tracks[props.selectedTrackIndex].title}
          onChange={changeHandler}
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
          value={props.tracks[props.selectedTrackIndex].speaker}
          onChange={changeHandler}
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
          value={props.tracks[props.selectedTrackIndex].event}
          onChange={changeHandler}
          InputLabelProps={{
            shrink: true
          }}
        />
        <InlineDatePicker
          id="eventYear"
          value={
            props.tracks[props.selectedTrackIndex].eventYear
              ? DateTime.local(props.tracks[props.selectedTrackIndex].eventYear)
              : null
          }
          onChange={eventYearChangeHandler}
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
          value={getFileSize(props.tracks[props.selectedTrackIndex].fileSize)}
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
          value={getDuration(props.tracks[props.selectedTrackIndex].duration)}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    tracks: state.upload.tracks,
    selectedTrackIndex: state.upload.selectedTrackIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTrack: track => dispatch({ type: actionTypes.EDIT_TRACK, track: track })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(track);
