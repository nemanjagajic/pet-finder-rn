import {SET_COMMENTS, SET_IS_FETCHING_COMMENTS} from "./constants";

export const setIsFetchingComments = isFetching => ({
  type: SET_IS_FETCHING_COMMENTS,
  isFetching
});

export const setComments = comments => ({
  type: SET_COMMENTS,
  comments
});