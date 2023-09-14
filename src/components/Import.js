import React from "react";

import {
  Container,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import MoreVertIcon from '@mui/icons-material/MoreVert'

const Import = (props) => { 

  return (
    <Container>
        <h2>COUNT: {props.makes.length}</h2>
      <Button onClick={props.fetchMakes} variant="contained" color="primary">
        Import
      </Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">MAKE</TableCell>
            <TableCell align="right">ACTIONs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((row, index) => (
            <TableRow key={row.MakeName} >
              <TableCell align="right">{row.MakeId}</TableCell>
              <TableCell align="right">{row.MakeName}</TableCell>
              <TableCell align="right">
                <MoreVertIcon 
                    row={row.MakeId}
                    onClick={() => props.deleteMake(index)}
                /> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
