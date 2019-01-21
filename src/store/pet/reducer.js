import {ADD_FOUND_PET, ADD_LOST_PET, SET_LOST_PETS, SET_PETS} from "./constants";

const initialState = {
    items: [],
    lostPets: []
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
        case SET_LOST_PETS:
            return {
                ...state,
                lostPets: action.items
            };
        case ADD_LOST_PET:
            return {
                ...state,
                lostPets: state.lostPets.concat(action.pet)
            };
        default:
            return state;
    }
};

export default petReducer;