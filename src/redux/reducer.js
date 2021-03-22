import { createForms } from "react-redux-form";
import { combineReducers } from "redux";
// import COMMENTS from "../datas/comments";
// import DISHES from "../datas/dishes";
import * as actionType from "./actionTypes";
import { initialContactForm } from "./forms";

const dishReducer = (
  dishState = { dishLoading: false, dishes: [], loadDishesError: false },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.DISHES_LOADING:
      return { ...dishState, dishLoading: true, dishes: [] };

    case actionType.LOAD_DISHES_ERROR:
      return {
        ...dishState,
        loadDishesError: true,
        dishLoading: false,
        dishes: [],
      };

    case actionType.LOAD_DISHES:
      return {
        ...dishState,
        dishLoading: false,
        dishes: payload,
        loadDishesError: false,
      };

    default:
      return dishState;
  }
};

const defaultCommentState = {
  commentLoading: false,
  loadError: false,
  addError: false,
  fieldReset: false,
  commentSubmitting: false,
};
const initCommentState = {
  ...defaultCommentState,
  comments: [],
};

const commentReducer = (commentState = initCommentState, action) => {
  const init = { ...commentState, ...defaultCommentState };
  const { type, payload } = action;
  switch (type) {
    case actionType.ADD_COMMENT:
      // const newComment = payload;
      // newComment.date = new Date().toString();
      // newComment.id = commentState.comments.length;
      return { ...commentState, comments: payload, fieldReset: true };
    case actionType.ADD_COMMENT_FAILED:
      return { ...init, addError: true };

    case actionType.COMMENT_LOADING:
      return { ...commentState, commentLoading: true };

    case actionType.COMMENT_SUBMITTING:
      return { ...init, commentSubmitting: true };
    case actionType.LOAD_COMMENT:
      return { ...init, comments: payload };

    case actionType.LOAD_COMMENT_ERROR:
      return { ...init, loadError: true, comments: [] };

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
