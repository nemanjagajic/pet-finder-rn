import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import petReducer from './pet/reducer';
import commentsReducer from "./comments/reducer";
import userReducer from "./user/reducer";

const appReducer = combineReducers({
  auth: authReducer,
  pets: petReducer,
  comments: commentsReducer,
  user: userReducer
});

export default appReducer;
