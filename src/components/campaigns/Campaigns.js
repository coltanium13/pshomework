import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampaigns } from "../../actions/campaignActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import CampaignTable from "./CampaignTable";
import Typography from "@material-ui/core/Typography";

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

const Campaigns = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { campaigns, campaign } = useSelector(state => ({
    ...state.campaigns
  }));

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            Campaigns
          </Typography>
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
        <Grid item xs={6}>
          <Typography variant="h6" className="headings" gutterBottom>
            Open Campaigns
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CampaignTable campaigns={campaigns} status="Preview" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className="headings" gutterBottom>
            Sent Campaigns
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CampaignTable campaigns={campaigns} status="Sent" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Campaigns;
