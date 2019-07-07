import React, { Fragment, useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import { NowPlaying } from "../../Components";

const Player = () => {
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
    initialize();
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.play();
      setPlaying(!playing);
    }
  }, [player]);

  useEffect(() => {
    if (playing && !seekLoopRunning) {
      seekLoop();
    }
  }, [playing]);

  useEffect(() => {
    if (playing && !seekLoopRunning && !preventSeekLoop) {
      seekLoop();
    }
  }, [preventSeekLoop]);

  useEffect(() => {
    if (player !== null) {
      if (!isNaN(seekPosition)) setSeekPercent(seekPosition / player.duration());
    }
  }, [seekPosition]);

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
    const blob = await loadBlob("https://fp-backend.azurewebsites.net/tracks/download?id=b87f52c0-95fc-11e9-b29c-a9d34d14769b");
    const blobURL = window.URL.createObjectURL(blob);
    const newPlayer = new Howl({
      src: [blobURL],
      format: [".mp3"],
      autoplay: true,
      html5: true,
      onseek: onSeek,
      onplay: updatePlayingStatus,
      onpause: updatePlayingStatus
    });
    setPlayer(newPlayer);
  };

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

  //* Runs while the track is playing to keep the seek position up to date
  const seekLoop = () => {
    if (playingRef.current && !preventSeekLoopRef.current) {
      if (!seekLoopRunning) setSeekLoopRunning(true);
      // const time = Math.floor(player.seek());
      const time = Math.round(player.seek() * 100) / 100;
      if (!isNaN(time) && time !== seekPositionRef) {
        setSeekPosition(time);
      }
      setTimeout(seekLoop, 100);
    } else {
      setSeekLoopRunning(false);
    }
  };

  const onSeek = () => {
    setSeekPosition(Math.floor(playerRef.current.seek()));
  };

  const seekSliderChange = percent => {
    setPreventSeekLoop(true);
    setSeekPosition(Math.floor(player.duration() * percent));
  };

  const seekSliderChangeCommitted = percent => {
    player.seek(Math.floor(player.duration() * percent));
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
        />
      )}
    </Fragment>
  );
};

export default Player;
