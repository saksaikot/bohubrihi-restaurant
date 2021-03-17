import { combineReducers } from "redux";
import COMMENTS from "../datas/comments";
import DISHES from "../datas/dishes";

const dishReducer = (dishState = DISHES, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return dishState;
  }
};

const commentReducer = (commentState = COMMENTS, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_COMMENT":
      const newComment = payload;
      newComment.date = new Date().toString();
      newComment.id = commentState.length;

      return [...commentState, newComment];
    default:
      return commentState;
  }
};

export const reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
