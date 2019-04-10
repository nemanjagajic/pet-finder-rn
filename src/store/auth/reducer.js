import { SET_LOGGED_USER, SET_REGISTERED_MESSAGE } from './constants';

const initialState = {
  loggedUser: null,
  registeredMessage: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_LOGGED_USER:
    return {
      ...state,
      loggedUser: action.user,
    };
  case SET_REGISTERED_MESSAGE:
    return {
      ...state,
      registeredMessage: action.message,
    };
  default:
    return state;
  }
};

export default authReducer;
