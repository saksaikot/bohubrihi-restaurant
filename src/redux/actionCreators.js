import { bindActionCreators } from "redux";
import * as actionTypes from "./actionTypes";
import { myStore } from "./store";

const addComment = (comments) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comments,
});

export const commentStore = bindActionCreators(
  {
    add: addComment,
  },
  myStore.dispatch
);
