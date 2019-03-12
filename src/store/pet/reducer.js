import {
    ADD_ADOPTING_PET,
    ADD_FOUND_PET,
    ADD_LOST_PET,
    SET_ADOPTING_PETS, SET_FETCHING_ADOPTING_PETS,
    SET_FETCHING_LOST_PETS, SET_FETCHING_PETS,
    SET_LOST_PETS,
    SET_PETS
} from "./constants";

const initialState = {
    items: [],
    lostPets: [],
    adoptingPets: []
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
        case SET_FETCHING_PETS:
            return {
                ...state,
                isFetchingPets: action.isFetching
            };
        case SET_LOST_PETS:
            return {
                ...state,
                lostPets: action.items
            };
        case SET_FETCHING_LOST_PETS:
            return {
                ...state,
                isFetchingLostPets: action.isFetching
            };
        case ADD_LOST_PET:
            return {
                ...state,
                lostPets: state.lostPets.concat(action.pet)
            };
        case SET_ADOPTING_PETS:
            return {
                ...state,
                adoptingPets: action.items
            };
        case SET_FETCHING_ADOPTING_PETS:
            return {
                ...state,
                isFetchingAdoptingPets: action.isFetching
            };
        case ADD_ADOPTING_PET:
            return {
                ...state,
                adoptingPets: state.adoptingPets.concat(action.pet)
            };
        default:
            return state;
    }
};

export default petReducer;