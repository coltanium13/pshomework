import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  GET_CAMPAIGN,
  DELETE_CAMPAIGN
} from "./types";
import _ from "lodash";

export const fetchCampaigns = () => dispatch => {
  dispatch({
    type: FETCH_CAMPAIGNS
  });
};

export const createCampaign = (campaign, history) => dispatch => {
  console.log("new campaign: ", JSON.stringify(campaign));
  dispatch({
    type: NEW_CAMPAIGN,
    payload: campaign
  });

  history.push('/campaigns');
};

export const getCampaignById = id => dispatch => {
  console.log(JSON.stringify("getCampaignById: "), id);
  dispatch({
    type: GET_CAMPAIGN,
    payload: id
  });
};

export const updateCampaign = campaign => dispatch => {};

export const deleteCampaign = id => dispatch => {
  dispatch({
    type: DELETE_CAMPAIGN,
    payload: id
  });
};
