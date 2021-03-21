import { createForms } from "react-redux-form";
import { combineReducers } from "redux";
import COMMENTS from "../datas/comments";
// import DISHES from "../datas/dishes";
import * as actionType from "./actionTypes";
import { initialContactForm } from "./forms";
const dishReducer = (
  dishState = { dishLoading: false, dishes: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.DISHES_LOADING:
      return { ...dishState, dishLoading: true, dishes: [] };
    case actionType.LOAD_DISHES:
      return { ...dishState, dishLoading: false, dishes: payload };

    default:
      return dishState;
  }
};

const commentReducer = (commentState = COMMENTS, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.ADD_COMMENT:
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
  ...createForms({
    contact: initialContactForm,
  }),
});
