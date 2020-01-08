import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCampaign } from "../../actions/campaignActions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
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

  const onChange = e => {
    setNewCampaign({
      ...newCampaign,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const campaign = {
      title: newCampaign.name,
      body: newCampaign.text
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
      <h1>Add Campaign</h1>
      <form onSubmit={onSubmit}>
        <div>
          <br />
          <TextField
            required
            name="name"
            id="name-input"
            label="Required"
            variant="outlined"
            defaultValue="New Campaign"
            onChange={onChange}
            value={newCampaign.title}
          />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <br />
          <textarea name="body" onChange={onChange} value={newCampaign.body} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCampaignForm;
