import {
  FETCH_TAGS
} from "../actions/types";
import data from "./data/tags.json";

const initialState = {
  tags: data.tags,
  tag: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS:
      return {
        ...state
      };
    default:
      return state;
  }
}
