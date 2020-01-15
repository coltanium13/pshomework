import { combineReducers } from "redux";
import campaignReducer from "./campaignReducer";
import tagReducer from "./tagReducer";
import segmentReducer from "./segmentReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  campaigns: campaignReducer,
  tags: tagReducer,
  segments: segmentReducer,
  alerts: alertReducer
});
