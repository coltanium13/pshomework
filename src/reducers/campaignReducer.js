import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  GET_CAMPAIGN,
  DELETE_CAMPAIGN,
  UPDATE_CAMPAIGN
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
    case UPDATE_CAMPAIGN: {
      return {
        ...state,
        campaigns: [
          ...state.campaigns.map(c =>
            c.id.toString() === action.payload.id.toString()
              ? { ...action.payload }
              : c
          )
        ],
        campaign: action.payload
      };
    }
    case GET_CAMPAIGN: {
      return {
        ...state,
        campaign: {
          ...state.campaigns.find(
            campaign => campaign.id.toString() === action.payload.toString()
          )
        }
      };
    }
    case DELETE_CAMPAIGN:
      return {
        ...state,
        campaigns: [
          ...state.campaigns.filter(
            campaign => campaign.id.toString() !== action.payload.toString()
          )
        ]
      };
    default:
      return state;
  }
}
