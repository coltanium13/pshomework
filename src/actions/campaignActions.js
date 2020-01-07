import { FETCH_CAMPAIGNS, NEW_CAMPAIGN } from "./types";
import _ from "lodash";
import axios from "axios";

export const fetchCampaigns = () => dispatch => {
  axios.get("data/campaigns.json").then(res => {
    console.log(JSON.stringify("data: "), res.data);
    dispatch({
      type: FETCH_CAMPAIGNS,
      payload: res.data.campaigns
    });
  });
};

export const createCampaign = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_CAMPAIGN,
        payload: post
      })
    );
};

export const updateCampaign = campaign => dispatch => {};
