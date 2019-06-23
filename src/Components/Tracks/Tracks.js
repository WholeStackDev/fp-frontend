import React, { useEffect, useState } from "react";
import Styles from "./Tracks.styles";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";
import axios from "axios";
import fileDownload from "js-file-download";
import { saveAs } from "file-saver";

import IconButton from "@material-ui/core/IconButton";
import DownloadIcon from "@material-ui/icons/CloudDownloadOutlined";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Tracks = props => {
  useEffect(() => {
    PageName("Tracks");
    IsTopLevelPage(false);

    axios.get("/tracks").then(res => {
      setTracks(res.data);
    });
  }, []);

  const [tracks, setTracks] = useState([{ id: "0", title: " ", speaker: " " }]);
  const classes = Styles();

  const downloadFile = (id, title) => {
    // Having a hard time getting Axios to work, so directly using FileSaver for now.
    const downloadPath = axios.defaults.baseURL + "/tracks/download?id=" + id;
    // window.location();
    saveAs(downloadPath, title + ".mp3");
  };

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Speaker</TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.speaker}</TableCell>
              <TableCell>
                <a
                  href={
                    axios.defaults.baseURL + "/tracks/download?id=" + row.id
                  }
                  download
                >
                  Download
                </a>
                {/* <IconButton
                  onClick={() => downloadFile(row.id, row.title)}
                  id="back-button"
                >
                  <DownloadIcon />
                </IconButton> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tracks;
