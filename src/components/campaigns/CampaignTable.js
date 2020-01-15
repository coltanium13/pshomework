import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { deleteCampaign } from "../../actions/campaignActions";

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

const CampaignTable = ({ campaigns, status }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDeleteCampaign = id => {
    if (window.confirm("Are you sure you want to delete this Campaign?")) {
      dispatch(deleteCampaign(id));
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headcell}>Campaign</TableCell>
            <TableCell className={classes.headcell} align="center">
              Status
            </TableCell>
            <TableCell className={classes.headcell} align="center">
              Action
            </TableCell>
            <TableCell className={classes.headcell} align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns
            .filter(c => c.status === status)
            .map(campaign => (
              <TableRow key={campaign.id}>
                <TableCell component="th" scope="row">
                  <Link
                    component={RouterLink}
                    to={`/campaigns/details/${campaign.id}`}
                  >
                    {campaign.name}
                  </Link>
                </TableCell>
                <TableCell align="center">{campaign.status}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    component={RouterLink}
                    to={`/campaigns/edit/${campaign.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteCampaign(campaign.id)}
                  >
                    Del
                  </Button>
                </TableCell>
                <TableCell align="center" />
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CampaignTable;
