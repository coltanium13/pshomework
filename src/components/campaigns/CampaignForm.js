import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCampaign } from "../../actions/campaignActions";

function CampaignForm() {
  const [newCampaign, setNewCampaign] = useState({
    title: "",
    body: ""
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

    const post = {
      title: newCampaign.title,
      body: newCampaign.body
    };

    dispatch(createCampaign(post));

    setNewCampaign({
      title: "",
      body: ""
    });
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
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
}

export default CampaignForm;
