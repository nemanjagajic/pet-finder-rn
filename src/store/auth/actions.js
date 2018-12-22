import {SET_LOGGED_USER, LOG_IN} from './constants';

export const setLoggedUser = (user) => ({
    type: SET_LOGGED_USER,
    user
});

export const logIn = (user) => ({
    type: LOG_IN,
    user
});