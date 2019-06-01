import React from "react";
import Styles from "./NowPlayingBar.styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import SkipPrevious from "@material-ui/icons/SkipPrevious";
import Play from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import SkipNext from "@material-ui/icons/SkipNext";

function PlayerMinimized() {
  const classes = Styles();

  const [playing, setPlaying] = React.useState(false);

  const playPauseHandler = () => {
    setPlaying(!playing);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.trackName} variant="h6">
            What happens when the title is very, very long
          </Typography>
          <IconButton className={classes.margin}>
            <SkipPrevious className={classes.buttons} fontSize="large" />
          </IconButton>
          <IconButton
            onClick={() => playPauseHandler()}
            className={classes.margin}
          >
            {playing && <Play className={classes.buttons} fontSize="large" />}
            {!playing && <Pause className={classes.buttons} fontSize="large" />}
          </IconButton>
          <IconButton className={classes.margin}>
            <SkipNext className={classes.buttons} fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default PlayerMinimized;
