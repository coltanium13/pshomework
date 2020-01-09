import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import { Button, Divider } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getCampaignById, updateCampaign } from "../../actions/campaignActions";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
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

const EditCampaign = ({ match, history }) => {
  const classes = useStyles();
  const campaignId = match.params.id;
  const dispatch = useDispatch();

  const { campaign } = useSelector(state => ({
    ...state.campaigns
  }));

  const [formData, setFormData] = useState({
    name: "",
    text: "",
    media: "",
    status: "",
    segment_id: "",
    id: campaign.id
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  useEffect(() => {
    dispatch(getCampaignById(campaignId));
    setLabelWidth(inputLabel.current.offsetWidth);

    setFormData({
      name: campaign.name,
      text: campaign.text,
      media: !campaign.media ? "" : campaign.media,
      status: campaign.status,
      segment_id: campaign.segment_id
    });
  }, [dispatch, campaignId]);

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(updateCampaign(formData, history));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Edit Campaign
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
            value={formData.name || ""}
          />
        </div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel}>Segment</InputLabel>
            <Select
              labelId="segment-select-label"
              id="segment-select"
              name="segment_id"
              value={formData.segment_id || ""}
              onChange={onChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            id="camp-media"
            label="Media"
            value={formData.media || ""}
            InputProps={{
              readOnly: true
            }}
          />
        </div>
        <div>
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: "none" }}
            id="raised-button-file"
            name="media"
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
              Edit Media
            </Button>
          </label>
        </div>
        <div>
          <TextareaAutosize
            className={classes.textArea}
            name="text"
            value={formData.text || ""}
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
          Save
        </Button>
      </form>
    </div>
  );
};

export default withRouter(EditCampaign);
