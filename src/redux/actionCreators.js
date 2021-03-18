// import { bindActionCreators } from "redux";
import * as actionTypes from "./actionTypes";
// import { myStore } from "./store";

const addComment = (comments) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comments,
});

export const commentStore = (dispatch) => ({
  addComment: (comments) => dispatch(addComment(comments)),
});

const dishLoading = () => ({ type: actionTypes.DISHES_LOADING });
const loadDishes = (dishes) => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes,
});

// export const dishStore = bindActionCreators(
//   {
//     dishLoading: dishLoading,
//     loadDishes: loadDishes,
//   },
//   myStore.dispatch
// );

export const dishStore = (dispatch) => ({
  fetchDishes: (dishes) => {
    dispatch(dishLoading());
    setTimeout(() => dispatch(loadDishes(dishes)), 3000);
  },
});
