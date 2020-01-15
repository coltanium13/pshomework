import {
  FETCH_SEGMENTS,
  GET_SEGMENT,
  NEW_SEGMENT,
  DELETE_SEGMENT,
  UPDATE_SEGMENT
} from "./types";
import data from "../reducers/data/segments.json";
import { createAlert } from "./alertActions";

export const fetchSegments = () => dispatch => {
  dispatch({
    type: FETCH_SEGMENTS,
    payload: data.segments
  });
};

export const createSegment = (segment, history) => dispatch => {
  dispatch({
    type: NEW_SEGMENT,
    payload: segment
  });

  dispatch(createAlert("Segment created successfully!", "success"));

  history.push("/segments");
};

export const getSegmentById = id => dispatch => {
  dispatch({
    type: GET_SEGMENT,
    payload: id
  });
};

export const updateSegment = (segment, history) => dispatch => {
  dispatch({
    type: UPDATE_SEGMENT,
    payload: segment
  });

  history.push("/segments");
};

export const deleteSegment = id => dispatch => {
  dispatch({
    type: DELETE_SEGMENT,
    payload: id
  });
};
