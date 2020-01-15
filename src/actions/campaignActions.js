import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  GET_CAMPAIGN,
  DELETE_CAMPAIGN,
  UPDATE_CAMPAIGN
} from "./types";
import data from "../reducers/data/campaigns.json";

export const fetchCampaigns = () => dispatch => {
  dispatch({
    type: FETCH_CAMPAIGNS,
    payload: data.campaigns
  });
};

export const createCampaign = (campaign, history) => dispatch => {
  dispatch({
    type: NEW_CAMPAIGN,
    payload: campaign
  });

  history.push("/campaigns");
};

export const getCampaignById = id => dispatch => {
  dispatch({
    type: GET_CAMPAIGN,
    payload: id
  });
};

export const updateCampaign = (campaign, history) => dispatch => {
  dispatch({
    type: UPDATE_CAMPAIGN,
    payload: campaign
  });

  history.push("/campaigns");
};

export const deleteCampaign = id => dispatch => {
  dispatch({
    type: DELETE_CAMPAIGN,
    payload: id
  });
};
