import React from "react";
import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Box from "@material-ui/core/Box";

const CssTextField = withStyles(theme => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.secondary.main
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.secondary.main
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.dark
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.main
      }
    }
  }
}))(TextField);

const TrackEdit = props => {
  const changeHandler = event => {
    props.onTrackChange(event.target.id, event.target.value);
  };

  return (
    // <div style={{ maxWidth: "500px", margin: "auto", padding: "1rem" }}>
    <div>
      <TextField
        id="fileName"
        label="File Name"
        variant="outlined"
        margin="normal"
        fullWidth
        disabled
        value={props.track.fileName}
      />
      <CssTextField
        id="title"
        label="Title"
        variant="outlined"
        margin="normal"
        fullWidth
        style={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "red"
            }
          }
        }}
        value={props.track.title}
        onChange={changeHandler}
      />
      <CssTextField
        id="speaker"
        label="Speaker"
        variant="outlined"
        margin="normal"
        fullWidth
        value={props.track.speaker}
        onChange={changeHandler}
      />
      <CssTextField
        id="event"
        label="Event"
        variant="outlined"
        margin="normal"
        fullWidth
        value={props.track.event}
        onChange={changeHandler}
      />
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box>
          <CssTextField
            id="eventYear"
            label="Year"
            variant="outlined"
            margin="normal"
            value={props.track.eventYear}
            onChange={changeHandler}
          />
        </Box>
        <Box>
          <CssTextField
            id="eventMonth"
            label="Month"
            variant="outlined"
            margin="normal"
            value={props.track.eventMonth}
            onChange={changeHandler}
          />
        </Box>
        <Box>
          <CssTextField
            id="eventDay"
            label="Day"
            variant="outlined"
            margin="normal"
            value={props.track.eventDay}
            onChange={changeHandler}
          />
        </Box>
      </Box>
    </div>
  );
};

export default TrackEdit;
