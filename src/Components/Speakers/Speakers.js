import React, { useEffect, useState } from "react";
import Styles from "./Speakers.styles";
import { PageName, IsTopLevelPage } from "../../Utilities/Navigation";
import axios from "axios";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Speakers = props => {
  useEffect(() => {
    PageName("Speakers");
    IsTopLevelPage(false);

    axios.get("https://fp-backend.herokuapp.com/speakers").then(res => {
      console.log(res.data);
      setSpeakers(res.data);
    });
  }, []);

  const [speakers, setSpeakers] = useState([{ firstName: " ", lastName: "" }]);
  const classes = Styles();

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {speakers.map(row => (
            <TableRow key={row.firstName}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Speakers;
