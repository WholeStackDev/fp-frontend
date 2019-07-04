import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { TracksTable } from "../../Components";

const Tracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await axios.get("/tracks");
      setTracks(results.data);
    })();
  }, []);

  return (
    <Fragment>
      {tracks.length == 0 && <p>Loading...</p>}
      {tracks.length > 0 && <TracksTable tracks={tracks} />}
    </Fragment>
  );
};

export default Tracks;
