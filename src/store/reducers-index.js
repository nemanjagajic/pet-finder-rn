import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import petReducer from './pet/reducer';

const appReducer = combineReducers({
  auth: authReducer,
  pets: petReducer,
});

export default appReducer;
