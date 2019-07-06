import React, { Fragment, useEffect, useState } from "react";

const Player = () => {
  function loadBlob(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }

  useEffect(() => {
    loadBlob("http://localhost:4000/tracks/download?id=b87f52c0-95fc-11e9-b29c-a9d34d14769b").then(res => {
      document.getElementById("audioTrack").src = window.URL.createObjectURL(res);
    });
  }, []);
  return (
    <Fragment>
      <audio controls="controls" id="audioTrack" />
    </Fragment>
  );
};

export default Player;
