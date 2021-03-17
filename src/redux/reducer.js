import COMMENTS from "../datas/comments";
import DISHES from "../datas/dishes";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", state, action);
  if (action.type === "ADD_COMMENT") {
    const newComment = action.payload;
    newComment.id = state.comments.length;

    return { ...state, comments: [...state.comments, newComment] };
  }
  return state;
};
