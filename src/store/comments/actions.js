import {POST_PET_COMMENT, SET_COMMENTS, SET_IS_FETCHING_COMMENTS, POST_PET_AD_COMMENT} from "./constants";

export const setIsFetchingComments = isFetching => ({
  type: SET_IS_FETCHING_COMMENTS,
  isFetching
});

export const setComments = comments => ({
  type: SET_COMMENTS,
  comments
});

export const postPetComment = comment => ({
  type: POST_PET_COMMENT,
  comment
});

export const postPetAdComment = comment => ({
  type: POST_PET_AD_COMMENT,
  comment
});