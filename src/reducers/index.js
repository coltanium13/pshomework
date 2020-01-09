import { combineReducers } from "redux";
import campaignReducer from "./campaignReducer";
import tagReducer from "./tagReducer";

export default combineReducers({
  campaigns: campaignReducer,
  tags: tagReducer
});
