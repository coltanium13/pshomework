import { FETCH_TAGS } from "../actions/types";

const initialState = {
  tags: [],
  tag: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    default:
      return state;
  }
}
