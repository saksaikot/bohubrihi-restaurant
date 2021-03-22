import axios from "axios";
import * as actionTypes from "../actionTypes";
import * as endPoints from "../endPoints";


const dishLoading = () => ({ type: actionTypes.DISHES_LOADING });
const loadDishes = (dishes) => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes,
});
const dishLoadingError = () => ({ type: actionTypes.LOAD_DISHES_ERROR });

export const dishesActions = (dispatch) => ({
  dishesActions: {
    fetchDishes: () => {
      dispatch(dishLoading());
      axios
        .get(endPoints.GET_DISHES)
        .then((response) => response.data)
        .then((dishes) => dispatch(loadDishes(dishes.DISHES)))
        .catch((e) => dispatch(dishLoadingError()));
    },
  },
});
