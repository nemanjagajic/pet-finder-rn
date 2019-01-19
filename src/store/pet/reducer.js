import {ADD_FOUND_PET, ADD_LOST_PET, SET_PET_ADS, SET_PETS} from "./constants";

const initialState = {
    items: [],
    adItems: []
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
        case ADD_LOST_PET:
            return {
                ...state,
                adItems: state.adItems.concat(action.pet)
            };
        default:
            return state;
    }
};

export default petReducer;