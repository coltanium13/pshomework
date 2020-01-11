import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  },
  headcell: {
    fontWeight: "bold",
    fontSize: "medium"
  },
  btn: {
    margin: theme.spacing(1)
  }
}));

const SegmentTable = ({ segments }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headcell}>Segment</TableCell>
            <TableCell className={classes.headcell} align="center">
              Subscriber Count
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {segments.map(seg => (
            <TableRow key={seg.id}>
              <TableCell component="th" scope="row">
                <Typography variant="h6" gutterBottom>
                  {seg.name}
                </Typography>
              </TableCell>
              <TableCell align="center">{seg.subscribers_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SegmentTable;
