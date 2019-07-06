import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import SkipPrevious from "@material-ui/icons/SkipPrevious";
import Play from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import SkipNext from "@material-ui/icons/SkipNext";

const NowPlaying = props => {
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <IconButton onClick={props.togglePlaying}>
          {!props.playing && <Play fontSize="large" />}
          {props.playing && <Pause fontSize="large" />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default NowPlaying;
