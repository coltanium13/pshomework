import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignById } from "../../actions/campaignActions";
import { getSegmentById, fetchSegments } from "../../actions/segmentActions";
import { fetchTags } from "../../actions/tagActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent
} from "@material-ui/core";

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
  },
  card: {
    maxWidth: 345
  },
  cardContent: {
    height: 60
  },
  media: {
    height: 140
  },
  textArea: {
    margin: theme.spacing(1),
    width: 600
  }
}));

const parseTags = (tags, text) => {
  return (
    text &&
    text.replace(/{shop_link}|{first_name}|{shop_name}/g, function(matchedTag) {
      return tags.find(tag => tag.tag === matchedTag).tag_value;
    })
  );
};

const CampaignDetails = ({ match }) => {
  const classes = useStyles();
  const campaignId = match.params.id;
  const dispatch = useDispatch();

  const { campaign } = useSelector(state => ({
    ...state.campaigns
  }));

  const { segment } = useSelector(state => ({
    ...state.segments
  }));

  const { tags } = useSelector(state => ({
    ...state.tags
  }));

  useEffect(() => {
    dispatch(getCampaignById(campaignId));
    dispatch(fetchTags());
    dispatch(fetchSegments());
    if (campaign.segment_id) {
      dispatch(getSegmentById(campaign.segment_id));
    }
  }, [dispatch, campaignId, campaign.segment_id]);

  return (
    <div>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
            {campaign.name}
          </Typography>
        </Grid>
        <Grid item xs={6} align="center">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={`/campaigns/edit/${campaign.id}`}
          >
            Edit Campaign
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="camp-status"
            label="Status"
            value={campaign.status || ""}
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
        {campaign.status !== "Preview" && <Stats campaign={campaign} />}
        <Grid item xs={12}>
          <TextField
            id="camp-segment"
            label="Segment"
            value={segment.name || ""}
            InputProps={{
              readOnly: true
            }}
          />
        </Grid>
        {campaign.media && (
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" gutterBottom>
                  Media
                </Typography>
              </CardContent>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={campaign.media || ""}
                  title="Media"
                />
              </CardActionArea>
            </Card>
          </Grid>
        )}
        <Grid item xs={12}>
          <TextareaAutosize
            className={classes.textArea}
            value={parseTags(tags, campaign.text)}
            aria-label="Message Text"
            rowsMin={3}
            readOnly
          />
        </Grid>
      </Grid>
    </div>
  );
};

export const Stats = ({ campaign }) => {
  return (
    <Fragment>
      <Grid item xs={3}>
        <TextField
          id="stats-sent"
          label="Sent"
          value={campaign.stats ? campaign.stats.sent : "" || ""}
          InputProps={{
            readOnly: true
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="stats-clicked"
          label="Clicked"
          value={campaign.stats ? campaign.stats.clicked : "" || ""}
          InputProps={{
            readOnly: true
          }}
        />
      </Grid>
    </Fragment>
  );
};

export default CampaignDetails;
