import { FETCH_SEGMENTS, GET_SEGMENT } from "./types";

export const fetchSegments = () => dispatch => {
  dispatch({
    type: FETCH_SEGMENTS
  });
};

export const getSegmentById = id => dispatch => {
  dispatch({
    type: GET_SEGMENT,
    payload: id
  });
};
