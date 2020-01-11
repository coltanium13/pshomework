import {
  FETCH_SEGMENTS,
  GET_SEGMENT,
  NEW_SEGMENT,
  DELETE_SEGMENT
} from "../actions/types";
import data from "./data/segments.json";

const initialState = {
  segments: data.segments,
  segment: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEGMENTS:
      return {
        ...state,
        segments: [...state.segments]
      };
    case NEW_SEGMENT:
      return {
        ...state,
        segments: [...state.segments, action.payload],
        segment: action.payload
      };
    case GET_SEGMENT: {
      return {
        ...state,
        segment: {
          ...state.segments.find(
            segment => segment.id.toString() === action.payload.toString()
          )
        },
        segments: [...state.segments]
      };
    }
    case DELETE_SEGMENT:
      return {
        ...state,
        segments: [
          ...state.segments.filter(
            segment => segment.id.toString() !== action.payload.toString()
          )
        ]
      };
    default:
      return state;
  }
}
