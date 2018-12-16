import {SET_NAVIGATION} from './constants';

const initialState = {
    navigation: null
};

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAVIGATION:
            return {
                ...state,
                navigation: action.navigation
            };
        default:
            return state;
    }
};

export default navigationReducer;