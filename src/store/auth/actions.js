import {SET_LOGGED_USER, LOG_IN, REGISTER, SET_REGISTERED_MESSAGE} from './constants';

export const setLoggedUser = user => ({
    type: SET_LOGGED_USER,
    user
});

export const logIn = user => ({
    type: LOG_IN,
    user
});

export const register = user => ({
    type: REGISTER,
    user
});

export const setRegisteredMessage = message => ({
    type: SET_REGISTERED_MESSAGE,
    message
});