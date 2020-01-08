import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  GET_CAMPAIGN,
  DELETE_CAMPAIGN
} from "../actions/types";

const initialState = {
  campaigns: [],
  campaign: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload
      };
    case NEW_CAMPAIGN:
      return {
        ...state,
        campaign: action.payload
      };
    case GET_CAMPAIGN: {
      console.log("get camp: ", JSON.stringify(action.payload));
      return {
        ...state,
        campaign: action.payload
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
