import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { createCampaign } from "../../actions/campaignActions";
import { fetchTags } from "../../actions/tagActions";
import { fetchSegments } from "../../actions/segmentActions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import uuid from "uuid";
import insertTextAtCursor from "insert-text-at-cursor";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  },
  textArea: {
    margin: theme.spacing(1),
    width: 400
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  btn: {
    margin: theme.spacing(1)
  }
}));

const CreateCampaignForm = ({ history }) => {
  const classes = useStyles();
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    text: "",
    media: "",
    tag: "",
    status: "Preview",
    segment_id: ""
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    dispatch(fetchTags());
    dispatch(fetchSegments());
  }, [dispatch]);

  const inputLabel = React.useRef(null);
  const textArea = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const { tags } = useSelector(state => ({
    ...state.tags
  }));
  const { segment, segments } = useSelector(state => ({
    ...state.segments
  }));

  const onChange = e => {
    setNewCampaign({
      ...newCampaign,
      [e.target.name]: e.target.value
    });
  };

  const handleTagChange = e => {
    insertTextAtCursor(textArea.current, e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const campaign = {
      name: newCampaign.name,
      text: newCampaign.text,
      status: "Preview",
      segment_id: newCampaign.segment_id,
      media: newCampaign.media,
      id: uuid()
    };

    dispatch(createCampaign(campaign, history));

    setNewCampaign({
      name: "",
      text: "",
      media: "",
      segment_id: ""
    });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add Campaign
      </Typography>
      <form className={classes.root} onSubmit={onSubmit}>
        <div>
          <TextField
            required
            name="name"
            id="name-input"
            label="Campaign Name"
            variant="outlined"
            onChange={onChange}
            value={newCampaign.name}
          />
        </div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel}>Segment</InputLabel>
            <Select
              labelId="segment-select-label"
              id="segment-select"
              name="segment_id"
              value={newCampaign.segment_id}
              onChange={onChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {segments.map(segment => (
                <MenuItem key={segment.id} value={segment.id}>
                  {segment.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {newCampaign.media && (
          <div>
            <TextField
              id="camp-media"
              label="Media"
              value={newCampaign.media || ""}
              InputProps={{
                readOnly: true
              }}
            />
          </div>
        )}
        <div>
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: "none" }}
            id="raised-button-file"
            name="media"
            value={newCampaign.media}
            multiple
            type="file"
            onChange={onChange}
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              component="span"
              color="secondary"
              className={classes.btn}
            >
              Add Media
            </Button>
          </label>
        </div>
        <div>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel id="tag-input-label">Add Tag</InputLabel>
            <Select
              labelId="tag-label"
              id="tag-select-filled"
              value={newCampaign.tag || ""}
              onChange={handleTagChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {tags.map(tag => (
                <MenuItem key={tag.id} value={tag.tag}>
                  {tag.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <TextareaAutosize
            ref={textArea}
            className={classes.textArea}
            name="text"
            value={newCampaign.text}
            aria-label="Message Text"
            rowsMin={3}
            placeholder="Message Text"
            onChange={onChange}
          />
        </div>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default withRouter(CreateCampaignForm);
