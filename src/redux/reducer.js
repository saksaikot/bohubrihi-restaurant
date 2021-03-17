import { combineReducers } from "redux";
import COMMENTS from "../datas/comments";
import DISHES from "../datas/dishes";

const dishReducer = (dishState = DISHES, action) => {
  return dishState;
};

const commentReducer = (commentState = COMMENTS, action) => {
  if (action.type === "ADD_COMMENT") {
    const newComment = action.payload;
    newComment.date = new Date().toString();
    newComment.id = commentState.length;

    return [...commentState, newComment];
  }
  return commentState;
};

export const reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
