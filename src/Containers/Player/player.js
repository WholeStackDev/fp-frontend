import React, { Fragment, useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import { NowPlaying } from "../../Components";
import { loadBlob } from "./player-utils";

const Player = props => {
  const [player, setPlayer] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [seekPosition, setSeekPosition] = useState(0);
  const [seekPercent, setSeekPercent] = useState(0);
  const [seekLoopRunning, setSeekLoopRunning] = useState(false);
  const [preventSeekLoop, setPreventSeekLoop] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [trackList, setTrackList] = useState(null);

  const playerRef = useRef(player);
  const playingRef = useRef(playing);
  const seekPositionRef = useRef(seekPosition);
  const preventSeekLoopRef = useRef(preventSeekLoop);

  playerRef.current = player;
  playingRef.current = playing;
  seekPositionRef.current = seekPosition;
  preventSeekLoopRef.current = preventSeekLoop;

  useEffect(() => {
    if (props.match.params.id !== null) setCurrentTrackId(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {
    if (props.location.state.tracks !== null) setTrackList(props.location.state.tracks);
  }, [props.location.state.tracks]);

  useEffect(() => {
    if (props.location.state.currentIndex !== null) setCurrentTrackIndex(props.location.state.currentIndex);
  }, [props.location.state.currentIndex]);

  useEffect(() => {
    if (trackList !== null && currentTrackIndex !== null) {
      if (trackList[currentTrackIndex].id !== currentTrackId) {
        setCurrentTrackId(trackList[currentTrackIndex].id);
        finishedPlaying();
      }
    }
  }, [trackList, currentTrackIndex]);

  useEffect(() => {
    if (currentTrackId !== null) {
      (async () => {
        const blob = await loadBlob("http://localhost:4000/tracks/download?id=" + currentTrackId);
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
      })();
    }
  }, [currentTrackId]);

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

  const skipNext = () => {
    if (currentTrackIndex === trackList.length) {
      setCurrentTrackIndex(0);
    } else {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const skipPrevious = () => {
    if (currentTrackIndex === 0) {
      setCurrentTrackIndex(trackList.length);
    } else {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  return (
    <Fragment>
      {player != null && currentTrackIndex !== null && trackList !== null && (
        <NowPlaying
          player={player}
          togglePlaying={togglePlaying}
          playing={playing}
          seekPosition={seekPosition}
          seekPercent={seekPercent}
          seekSliderChange={seekSliderChange}
          seekSliderChangeCommitted={seekSliderChangeCommitted}
          skipPrevious={skipPrevious}
          skipNext={skipNext}
          {...trackList[currentTrackIndex]}
        />
      )}
    </Fragment>
  );
};

export default Player;
