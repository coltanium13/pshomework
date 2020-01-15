import { combineReducers } from "redux";
import campaignReducer from "./campaignReducer";
import tagReducer from "./tagReducer";
import segmentReducer from "./segmentReducer";

export default combineReducers({
  campaigns: campaignReducer,
  tags: tagReducer,
  segments: segmentReducer
});
