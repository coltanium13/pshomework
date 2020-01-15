import { CREATE_ALERT, DELETE_ALERT } from "../actions/types";

const initialState = {
  alerts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ALERT:
      return {
        ...state,
        alerts: [...state, action.payload]
      };
    case DELETE_ALERT:
      return {
        ...state,
        alerts: [
          ...state.alerts.filter(
            alert => alert.id.toString() !== action.payload.toString()
          )
        ]
      };
    default:
      return state;
  }
}
