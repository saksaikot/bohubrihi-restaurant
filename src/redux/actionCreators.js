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

const dishLoading = () => ({ type: actionTypes.DISHES_LOADING });
const loadDishes = (dishes) => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes,
});

export const dishStore = bindActionCreators(
  {
    loading: dishLoading,
    load: loadDishes,
  },
  myStore.dispatch
);
