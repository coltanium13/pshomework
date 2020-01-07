import { FETCH_CAMPAIGNS, NEW_CAMPAIGN } from "../actions/types";

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
    default:
      return state;
  }
}
