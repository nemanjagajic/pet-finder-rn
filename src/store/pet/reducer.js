import {ADD_FOUND_PET, SET_PET_ADS, SET_PETS} from "./constants";

const initialState = {
    items: []
};

const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOUND_PET:
            return {
                ...state,
                items: state.items.concat(action.pet)
            };
        case SET_PETS:
            return {
                ...state,
                items: action.items
            };
        case SET_PET_ADS:
            return {
                ...state,
                adItems: action.items
            };
        default:
            return state;
    }
};

export default petReducer;