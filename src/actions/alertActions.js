import { CREATE_ALERT, DELETE_ALERT } from "./types";
import uuid from "uuid";

export const createAlert = (msg, alertType) => dispatch => {
  const id = uuid();
  dispatch({
    type: CREATE_ALERT,
    payload: { msg, alertType, id }
  });
};

export const deleteAlert = id => dispatch => {
  dispatch({ type: DELETE_ALERT, payload: id });
};
