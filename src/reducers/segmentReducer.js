import {
  FETCH_SEGMENTS,
  GET_SEGMENT,
  NEW_SEGMENT,
  UPDATE_SEGMENT,
  DELETE_SEGMENT
} from "../actions/types";

const initialState = {
  segments: [],
  segment: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEGMENTS: {
      if (state.segments.length < 1) {
        return {
          ...state,
          segments: [...action.payload]
        };
      }
      return state;
    }
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
    case UPDATE_SEGMENT: {
      return {
        ...state,
        segments: [
          ...state.segments.map(s =>
            s.id.toString() === action.payload.id.toString()
              ? { ...action.payload }
              : s
          )
        ],
        segment: action.payload
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
