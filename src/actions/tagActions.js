import {
  FETCH_TAGS
} from "./types";

export const fetchTags = () => dispatch => {
  dispatch({
    type: FETCH_TAGS
  });
};