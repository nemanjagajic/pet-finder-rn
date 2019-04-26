import { SET_IS_FETCHING_COMMENTS, SET_COMMENTS } from './constants';

const initialState = {
  items: [],
  isFetching: false
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_IS_FETCHING_COMMENTS:
    return {
      ...state,
      isFetching: action.isFetching
    };
  case SET_COMMENTS:
    return {
      ...state,
      items: action.comments
    };
  default:
    return state;
  }
};

export default commentsReducer;
