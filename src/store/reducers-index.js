import {combineReducers} from 'redux';

import authReducer from './auth/reducer';
import petReducer from "./pet/reducer";
import navigationReducer from "./navigation/reducer";

const appReducer = combineReducers({
    auth: authReducer,
    pets: petReducer,
    navigation: navigationReducer
});

export default appReducer;