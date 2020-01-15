import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../actions/tagActions";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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

const CampaignPreviewer = ({ campaign: { text, media } }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const { tags } = useSelector(state => ({
    ...state.tags
  }));

  return media || text ? (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            Message Preview
          </Typography>
        </CardContent>
        <CardActionArea>
          {media ? (
            <CardMedia
              className={classes.media}
              image={media || ""}
              title="Media"
            />
          ) : null}
          <CardContent>
            <Typography variant="body2" component="p" gutterBottom>
              {parseTags(tags, text)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  ) : null;
};

export default CampaignPreviewer;
