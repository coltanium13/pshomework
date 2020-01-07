import { combineReducers } from "redux";
import campaignReducer from "./campaignReducer";

export default combineReducers({
  campaigns: campaignReducer
});
