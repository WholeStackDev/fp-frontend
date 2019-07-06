import React, { Fragment, useState, useEffect } from "react";
import { Howl, Howler } from "howler";
// import ReactPlayer from "react-player";
import { NowPlaying } from "../../Components";

const Player = () => {
  // const [playing, setPlaying] = useState(true);
  // const togglePlaying = () => {
  //   setPlaying(!playing);
  // };
  const [player, setPlayer] = useState(null);
  const [track, setTrack] = useState(null);

  // const initPlayer = playerProp => {
  //   setPlayer(playerProp);
  // };

  // const seek = () => {
  //   console.log(player);
  //   console.log("Duration: " + player.getDuration());
  //   console.log("current time: " + player.getCurrentTime());
  //   player.seekTo(15, "seconds");
  // };

  useEffect(() => {
    const newPlayer = new Howl({
      src: ["http://localhost:4000/tracks/download?id=b87f52c0-95fc-11e9-b29c-a9d34d14769b"],
      format: [".mp3"],
      autoplay: false,
      html5: true
    });
    setPlayer(newPlayer);
    setTrack(newPlayer.play());
  }, []);

  const pause = () => {
    console.log(track);
    player.pause();
  };

  const play = () => {
    player.play(track);
  };

  const seekTest = () => {
    console.log(player.duration());
    player.seek(15000);
    player.play();
  };

  const checkState = () => {
    console.log("checking state...");
    console.log(player.state());
  };

  return (
    <Fragment>
      {/* <ReactPlayer
        url="http://localhost:4000/tracks/download?id=b87f52c0-95fc-11e9-b29c-a9d34d14769b"
        ref={initPlayer}
        playing={playing}
      /> */}
      {/* <NowPlaying togglePlaying={togglePlaying} playing={playing} />
      {player != null && <button onClick={seek}>Try Seek</button>} */}
      {track != null && (
        <Fragment>
          <button onClick={seekTest}>Try Seek</button>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={checkState}>Check</button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Player;
