import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignById } from "../../actions/campaignActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button, Divider } from "@material-ui/core";

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

const CampaignDetails = ({ match }) => {
  const campaignId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Camp Details Effect!!");
    dispatch(getCampaignById(campaignId));
  }, [dispatch, campaignId]);

  const { campaign } = useSelector(state => ({
    ...state.campaigns
  }));

  return (
    <Fragment>
      <div>
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
              to={`/edit-campaign/${campaign.id}`}
            >
              Edit Campaign
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
        </Grid>
      </div>
    </Fragment>
  );
};

export default CampaignDetails;
