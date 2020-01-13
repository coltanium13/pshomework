import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import { deleteSegment } from "../../actions/segmentActions";
import { fetchCampaigns } from "../../actions/campaignActions";
import { Button } from "@material-ui/core";

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
  const dispatch = useDispatch();

  const { campaigns } = useSelector(state => ({
    ...state.campaigns
  }));

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  const handleDeleteSegment = id => {
    //TODO: bring in campaigns
    //and check to make sure it is not used by any campaigns.
    //if it is, pop up saying it cant be deleted.
    //if not used, ask if sure they want to delete
    if (campaigns.find(c => c.segment_id.toString() === id.toString())) {
      window.alert(`Cannot delete because a campaign is using it.`);
      return;
    }
    if (window.confirm("Are you sure you want to delete this Segment?")) {
      dispatch(deleteSegment(id));
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headcell}>Segment</TableCell>
            <TableCell className={classes.headcell} align="center">
              Subscriber Count
            </TableCell>
            <TableCell className={classes.headcell} align="center">
              Action
            </TableCell>
            <TableCell className={classes.headcell} align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {segments.map(segment => (
            <TableRow key={segment.id}>
              <TableCell component="th" scope="row">
                <Typography variant="h6" gutterBottom>
                  {segment.name}
                </Typography>
              </TableCell>
              <TableCell align="center">{segment.subscribers_count}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  component={RouterLink}
                  to={`/segments/edit/${segment.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteSegment(segment.id)}
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

export default SegmentTable;
