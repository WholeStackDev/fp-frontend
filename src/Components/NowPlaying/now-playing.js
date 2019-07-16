import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Slider from "@material-ui/core/Slider";
import { secondsToTime } from "./now-playing-util";

import SkipPrevious from "@material-ui/icons/SkipPrevious";
import Play from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import SkipNext from "@material-ui/icons/SkipNext";

const NowPlaying = props => {
  const seekSliderChange = (event, newValue) => {
    props.seekSliderChange(newValue);
  };

  const seekSliderChangeCommitted = (event, newValue) => {
    props.seekSliderChangeCommitted(newValue);
  };

  return (
    <Fragment>
      <div
        style={{
          maxWidth: "500px",
          width: "90vw",
          margin: "auto"
        }}
      >
        <Box display="flex" justifyContent="center">
          <Box>
            <div
              style={{
                maxWidth: "300px",
                width: "70vw",
                maxHeight: "300px",
                height: "70vw",
                background: "linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(27,27,138,1) 35%, rgba(0,212,255,1) 100%)"
              }}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-left">
          <Box>
            <h3>{props.title}</h3>
            <h4>{props.speaker}</h4>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box style={{ paddingTop: "10px" }}>
            <Slider
              id="seekSlider"
              value={props.seekPercent}
              onChange={seekSliderChange}
              onChangeCommitted={seekSliderChangeCommitted}
              min={0}
              max={1}
              step={0.01}
              style={{ maxWidth: "500px", width: "90vw" }}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box>
            <p>{secondsToTime(Math.floor(props.seekPosition))}</p>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box>
            <IconButton onClick={props.skipPrevious}>
              <SkipPrevious fontSize="large" />
            </IconButton>
            <IconButton onClick={props.togglePlaying}>
              {!props.playing && <Play fontSize="large" />}
              {props.playing && <Pause fontSize="large" />}
            </IconButton>
            <IconButton onClick={props.skipNext}>
              <SkipNext fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </div>
    </Fragment>
  );
};

export default NowPlaying;
