import React, { useState } from "react";
import Styles from "./TrackEdit.styles";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { EDIT_TRACK, CLEAR_TRACKS } from "../../Store/Actions";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
    props.editTrack({
      ...props.track,
      [event.target.id]: event.target.value
    });
  };

  const Submit = () => {
    axios
      .post("/tracks/create", props.track)
      .then(res => {
        console.log(res.data);
        let formData = new FormData();
        formData.append("upload", props.track.file);
        axios
          .post("/tracks/upload?id=" + res.data.id, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(results => {})
          .catch(err => {});
        // props.history.push({ pathname: "/upload" });
        // props.clearTracks();
      })
      .catch(err => {});
  };

  // const [theFile, setTheFile] = useState({ file: null });
  // const fileChange = (e) => {
  //     this.setState({file:e.target.files[0]});
  // }
  // const submitTest = (e) => {
  //   e.preventDefault();
  //       const formData = new FormData();
  //       formData.append('myFile',this.state.file);
  //       const config = {
  //           headers: {
  //               'content-type': 'multipart/form-data'
  //           }
  //       };
  //   axios.post("/upload",formData,config)
  //     .then((response) => {
  //         alert("The file is successfully uploaded");
  //     }).catch((error) => {
  //       console.log(error);
  //   });
  // }

  const classes = Styles();

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "1rem" }}>
      <TextField
        id="file-name"
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
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <CssTextField
            id="event-year"
            label="Year"
            variant="outlined"
            margin="normal"
            value={props.track.eventYear}
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={4}>
          <CssTextField
            id="event-month"
            label="Month"
            variant="outlined"
            margin="normal"
            value={props.track.eventMonth}
            onChange={changeHandler}
          />
        </Grid>
        <Grid item xs={4}>
          <CssTextField
            id="event-day"
            label="Day"
            variant="outlined"
            margin="normal"
            value={props.track.eventDay}
            onChange={changeHandler}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={Submit}
        className={classes.button}
      >
        Submit
      </Button>
      {/* <form onSubmit={submitTest}>
        <h1>File Upload</h1>
        <input type="file" name="myFile" onChange= {fileChange} />
        <button type="submit">Upload</button>
      </form> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    track: state.upload.tracks[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTrack: track => dispatch({ type: EDIT_TRACK, track: track }),
    clearTracks: () => dispatch({ type: CLEAR_TRACKS })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackEdit);
