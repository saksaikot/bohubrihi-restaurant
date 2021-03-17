import * as actionTypes from "./actionTypes";

export const addComment = (comments, dispatch) =>
  dispatch({
    type: actionTypes.ADD_COMMENT,
    payload: comments,
  });
