import {
  FETCH_SEGMENTS,
  GET_SEGMENT,
  NEW_SEGMENT,
  DELETE_SEGMENT
} from "./types";

export const fetchSegments = () => dispatch => {
  dispatch({
    type: FETCH_SEGMENTS
  });
};

export const createSegment = (segment, history) => dispatch => {
  dispatch({
    type: NEW_SEGMENT,
    payload: segment
  });

  history.push("/segments");
};

export const getSegmentById = id => dispatch => {
  dispatch({
    type: GET_SEGMENT,
    payload: id
  });
};

export const deleteSegment = id => dispatch => {
  dispatch({
    type: DELETE_SEGMENT,
    payload: id
  });
};
