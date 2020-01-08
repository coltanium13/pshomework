import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  GET_CAMPAIGN,
  DELETE_CAMPAIGN
} from "../actions/types";
import data from "./data/campaigns.json";

const initialState = {
  campaigns: data.campaigns,
  campaign: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return {
        ...state
      };
    case NEW_CAMPAIGN:
      return {
        ...state,
        campaign: action.payload,
        campaigns: [...state.campaigns, action.payload]
      };
    case GET_CAMPAIGN: {
      return {
        ...state,
        campaign: {
          ...state.campaigns.find(campaign => campaign.id == action.payload)
        }
      };
    }
    case DELETE_CAMPAIGN:
      return {
        ...state,
        campaigns: [
          ...state.campaigns.filter(campaign => campaign.id !== action.payload)
        ]
      };
    default:
      return state;
  }
}
