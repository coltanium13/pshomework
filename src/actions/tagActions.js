import { FETCH_TAGS } from "./types";
import data from "../reducers/data/tags.json";

export const fetchTags = () => dispatch => {
  dispatch({
    type: FETCH_TAGS,
    payload: data.tags
  });
};
