import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampaigns } from "../../actions/campaignActions";

function Campaigns() {
  const dispatch = useDispatch();

  const { campaigns, campaign } = useSelector(state => ({
    ...state.campaigns
  }));

  //TODO: figure out a better way
  //to fake adding a new item to the beginning

  useEffect(() => {
    dispatch(fetchCampaigns(campaign));
  }, [campaign]);

  const postItems = campaigns.map((campaign, index) => (
    <div key={index}>
      <h3>{campaign.title}</h3>
      <p>{campaign.body}</p>
    </div>
  ));
  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  );
}

export default Campaigns;
