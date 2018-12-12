import {SET_LOGGED_USER} from './constants';

const initialState = {
    loggedUser: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_USER:
            return {
                ...initialState,
                loggedUser: action.user
            };
        default:
            return state;
    }
};

export default authReducer;