import {SET_LOGGED_USER} from './constants';

export const setLoggedUser = (user) => ({
   type: SET_LOGGED_USER,
   user
});