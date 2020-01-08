import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCampaign } from "../../actions/campaignActions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import { Button, Divider } from "@material-ui/core"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import uuid from "uuid";

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
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreateCampaignForm = () => {
  const classes = useStyles();
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    text: "",
    media: "",
    status: "Preview",
    segment_id: ""
  });

  const dispatch = useDispatch();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const onChange = e => {
    setNewCampaign({
      ...newCampaign,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const campaign = {
      name: newCampaign.name,
      text: newCampaign.text,
      status: "Preview",
      segment_id: newCampaign.segment_id,
      id: uuid()
    };

    dispatch(createCampaign(campaign));

    setNewCampaign({
      name: "",
      text: "",
      media: ""
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
        <InputLabel ref={inputLabel}>
          Segment
        </InputLabel>
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div>
          <TextareaAutosize
          className={classes.textArea}
            aria-label="Message Text"
            rowsMin={3}
            placeholder="Message Text"
          />
        </div>
        <Button
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

export default CreateCampaignForm;
