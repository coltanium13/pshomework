import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampaigns } from "../../actions/campaignActions";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Campaigns = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { campaigns, campaign } = useSelector(state => ({
    ...state.campaigns
  }));

  useEffect(() => {
    dispatch(fetchCampaigns(campaign));
  }, [campaign]);

  const allCampaigns = campaigns.map((campaign, index) => (
    <div key={index}>
      <h3>{campaign.name}</h3>
      <p>{campaign.text}</p>
    </div>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>Campaigns</h1>
        </Grid>
        <Grid item xs={6} align="center">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={"/create-campaign"}
          >
            Create New Campaign
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Campaigns;
