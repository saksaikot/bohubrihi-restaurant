import axios from "axios";
import * as actionTypes from "../actionTypes";
import * as endPoints from "../endPoints";
import { JSON_BIN_HEADER } from "../headers";

const addComment = (comments) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comments,
});

const loadComments = (comments) => ({
  type: actionTypes.LOAD_COMMENT,
  payload: comments,
});

const commentsLoading = () => ({
  type: actionTypes.COMMENT_LOADING,
});

const commentLoadingError = () => ({
  type: actionTypes.LOAD_COMMENT_ERROR,
});
const addCommentFailed = () => ({
  type: actionTypes.ADD_COMMENT_FAILED,
});
const commentSubmitting = () => ({
  type: actionTypes.COMMENT_SUBMITTING,
});

export const commentsActions = (dispatch) => ({
  commentsActions: {
    addComment: (comment, comments) => {
      comment.date = new Date().toString();
      comment.id = comments.length;
      const updatedComment = [...comments, comment];
      dispatch(commentSubmitting());
      axios
        .put(
          endPoints.PUT_COMMENTS,
          { COMMENTS: updatedComment },
          JSON_BIN_HEADER
        )
        .then((r) => r.data)
        .then((data) => {
          if (data.success) dispatch(addComment(updatedComment));
          else throw new Error("something failed");
        })
        .catch((e) => dispatch(addCommentFailed()));
    },
    fetchComments: () => {
      dispatch(commentsLoading());
      axios
        .get(endPoints.GET_COMMENTS)
        .then((response) => response.data)
        .then((comments) => dispatch(loadComments(comments.COMMENTS)))
        .catch((e) => dispatch(commentLoadingError()));
    },
  },
});
