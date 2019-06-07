import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const TrackEdit = props => {
  useEffect(() => {
    PageName("Upload");
    IsTopLevelPage(false);
  });

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

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "1rem" }}>
      <TextField
        id="file-name"
        label="File Name"
        variant="outlined"
        margin="normal"
        fullWidth
        disabled
        // value={props.tracks[props.selectedTrackIndex].fileName}
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
        // value={props.tracks[props.selectedTrackIndex].title}
        // onChange={changeHandler}
      />
      <CssTextField
        id="speaker"
        label="Speaker"
        variant="outlined"
        margin="normal"
        fullWidth
        // value={props.tracks[props.selectedTrackIndex].speaker}
        // onChange={changeHandler}
      />
      <CssTextField
        id="event"
        label="Event"
        variant="outlined"
        margin="normal"
        fullWidth
        // value={props.tracks[props.selectedTrackIndex].event}
        // onChange={changeHandler}
      />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CssTextField
            id="event-year"
            label="Year"
            variant="outlined"
            margin="normal"
            // value={props.tracks[props.selectedTrackIndex].event}
            // onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={4}>
          <CssTextField
            id="event-month"
            label="Month"
            variant="outlined"
            margin="normal"
            // value={props.tracks[props.selectedTrackIndex].event}
            // onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={4}>
          <CssTextField
            id="event-day"
            label="Day"
            variant="outlined"
            margin="normal"
            // value={props.tracks[props.selectedTrackIndex].event}
            // onChange={changeHandler}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TrackEdit;
