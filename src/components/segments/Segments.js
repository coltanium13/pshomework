import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSegments } from "../../actions/segmentActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import SegmentTable from "./SegmentTable";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  headings: {
    color: "primary"
  }
}));

const Segments = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { segments, segment } = useSelector(state => ({
    ...state.segments
  }));

  useEffect(() => {
    dispatch(fetchSegments());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            Segments
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={"/segments/create"}
          >
            Create New Segment
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <SegmentTable segments={segments} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Segments;
