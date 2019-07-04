import React, { Fragment } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

const Tracks = props => {
  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Speaker</TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tracks.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.speaker}</TableCell>
              <TableCell>
                <a href={axios.defaults.baseURL + "/tracks/download?id=" + row.id} download>
                  Download
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default Tracks;
