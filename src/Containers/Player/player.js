import React, { Fragment, useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import { NowPlaying } from "../../Components";

const Player = props => {
  const [player, setPlayer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [seekPosition, setSeekPosition] = useState(0);
  const [seekPercent, setSeekPercent] = useState(0);
  const [seekLoopRunning, setSeekLoopRunning] = useState(false);
  const [preventSeekLoop, setPreventSeekLoop] = useState(false);

  const playerRef = useRef(player);
  const playingRef = useRef(playing);
  const seekPositionRef = useRef(seekPosition);
  const preventSeekLoopRef = useRef(preventSeekLoop);

  playerRef.current = player;
  playingRef.current = playing;
  seekPositionRef.current = seekPosition;
  preventSeekLoopRef.current = preventSeekLoop;

  useEffect(() => {
    //* Loads the entire track into memory before playing it since streaming currently won't pre-load
    const loadBlob = url => {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
      });
    };
    const initialize = async () => {
      const blob = await loadBlob("https://fp-backend.herokuapp.com/tracks/download?id=" + props.match.params.id);
      const blobURL = window.URL.createObjectURL(blob);
      const newPlayer = new Howl({
        src: [blobURL],
        format: [".mp3"],
        autoplay: true,
        html5: true,
        onplay: updatePlayingStatus,
        onpause: updatePlayingStatus,
        onend: finishedPlaying
      });
      setPlayer(newPlayer);
    };
    initialize();
  }, []);

  const finishedPlaying = () => {
    setPlaying(false);
    setSeekPosition(0);
    setSeekPercent(0);
  };

  //* Manages a loop that runs while the track is playing to keep the seek position up to date
  useEffect(() => {
    const seekLoop = () => {
      if (playingRef.current && !preventSeekLoopRef.current) {
        if (!seekLoopRunning) setSeekLoopRunning(true);
        const time = Math.round(player.seek() * 100) / 100;
        if (!isNaN(time) && time !== seekPositionRef) {
          setSeekPosition(time);
          setSeekPercent(time / player.duration());
        }
        setTimeout(seekLoop, 100);
      } else {
        setSeekLoopRunning(false);
      }
    };
    if (!player || !playing || seekLoopRunning || preventSeekLoop) return;
    seekLoop();
  }, [player, playing, preventSeekLoop, seekLoopRunning]);

  const togglePlaying = () => {
    if (player.playing()) {
      player.pause();
    } else {
      player.play();
    }
  };

  const updatePlayingStatus = () => {
    setPlaying(playerRef.current.playing());
  };

  const seekSliderChange = percent => {
    //* Only relevant if you are navigating directly to a track and scrubbing before
    //* clicking play, but I'm doing this play/pause thing to get the track to load.
    if (player.state() === "unloaded") {
      player.play();
      player.pause();
    }
    setPreventSeekLoop(true);
    setSeekPosition(Math.floor(player.duration() * percent));
    setSeekPercent(percent);
  };

  const seekSliderChangeCommitted = percent => {
    const newPosition = Math.floor(player.duration() * percent);
    player.seek(newPosition);
    setSeekPosition(newPosition);
    setSeekPercent(percent);
    setPreventSeekLoop(false);
  };

  return (
    <Fragment>
      {player != null && (
        <NowPlaying
          player={player}
          togglePlaying={togglePlaying}
          playing={playing}
          seekPosition={seekPosition}
          seekPercent={seekPercent}
          seekSliderChange={seekSliderChange}
          seekSliderChangeCommitted={seekSliderChangeCommitted}
          title={props.location.state.title}
          speaker={props.location.state.speaker}
        />
      )}
    </Fragment>
  );
};

export default Player;
