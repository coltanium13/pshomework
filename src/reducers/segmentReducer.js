import { FETCH_SEGMENTS, GET_SEGMENT } from "../actions/types";
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
    default:
      return state;
  }
}
