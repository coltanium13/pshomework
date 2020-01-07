import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  headcell: {
    fontWeight: "bold",
    fontSize: "medium"
  }
});

const CampaignTable = ({campaigns, status}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headcell}>Campaign</TableCell>
            <TableCell className={classes.headcell} align="center">Status</TableCell>
            <TableCell className={classes.headcell} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.filter(c => c.status === status).map(campaign => (
            <TableRow key={campaign.id}>
              <TableCell component="th" scope="row">
                {campaign.name}
              </TableCell>
              <TableCell align="center">{campaign.status}</TableCell>
              <TableCell align="right">Edit | Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CampaignTable;
