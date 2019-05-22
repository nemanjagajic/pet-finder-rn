import {SET_UPDATING_USER} from "./constants";

const initialState = {
  isUpdating: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_UPDATING_USER:
    return {
      ...state,
      isUpdating: action.isUpdating
    };
  default:
    return state;
  }
};

export default userReducer;
