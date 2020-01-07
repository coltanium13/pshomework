import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampaigns } from "../../actions/campaignActions";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Divider } from "@material-ui/core";
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
  }, [dispatch, campaign]);

  const allCampaigns = campaigns.map((campaign, index) => (
    <Grid item key={campaign.id} item xs={12}>
      <h3>{campaign.name}</h3>
      <p>{campaign.text}</p>
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
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
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {allCampaigns}
      </Grid>
    </div>
  );
};

export default Campaigns;
