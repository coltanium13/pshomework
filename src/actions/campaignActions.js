import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  GET_CAMPAIGN,
  DELETE_CAMPAIGN
} from "./types";
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

export const createCampaign = campaign => dispatch => {
  console.log("new campaign: ", JSON.stringify(campaign));
  dispatch({
    type: NEW_CAMPAIGN,
    payload: campaign
  });
};

export const getCampaignById = id => dispatch => {
  console.log(JSON.stringify("getCampaignById: "), id);
  axios
    .get("data/campaigns.json", { baseURL: window.location.origin })
    .then(res => {
      dispatch({
        type: GET_CAMPAIGN,
        payload: res.data.campaigns.find(campaign => campaign.id == id)
      });
    });
};

export const updateCampaign = campaign => dispatch => {};

export const deleteCampaign = id => dispatch => {
  dispatch({
    type: DELETE_CAMPAIGN,
    payload: id
  });
};
