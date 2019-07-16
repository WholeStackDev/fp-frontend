import React, { Fragment } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { withRouter } from "react-router";

const Tracks = props => {
  const onClick = (id, index) => {
    console.log(index);
    props.history.push({ pathname: "/player/" + id, state: { tracks: props.tracks, currentIndex: index } });
  };
  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Speaker</TableCell>
            {/* <TableCell>Download</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tracks.map((row, index) => (
            <TableRow key={row.id} onClick={() => onClick(row.id, index)}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.speaker}</TableCell>
              {/* <TableCell>
                <a href={axios.defaults.baseURL + "/tracks/download?id=" + row.id} download>
                  Download
                </a>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default withRouter(Tracks);
