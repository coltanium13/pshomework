import {
  FETCH_CAMPAIGNS,
  NEW_CAMPAIGN,
  GET_CAMPAIGN,
  DELETE_CAMPAIGN,
  UPDATE_CAMPAIGN
} from "../actions/types";

const initialState = {
  campaigns: [],
  campaign: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAMPAIGNS: {
      if (state.campaigns.length < 1) {
        return {
          ...state,
          campaigns: [...action.payload]
        };
      }
      return {...state};
    }
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
        },
        campaigns: [...state.campaigns]
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
