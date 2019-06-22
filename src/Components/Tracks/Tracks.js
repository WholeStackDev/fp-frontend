import React, { useEffect, useState } from "react";
import Styles from "./Tracks.styles";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";
import axios from "axios";

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

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Speaker</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tracks.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.speaker}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tracks;
