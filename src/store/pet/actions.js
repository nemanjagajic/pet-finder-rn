import {ADD_FOUND_PET, POST_FOUND_PET, FETCH_PETS, SET_PETS} from "./constants";

export const addFoundPet = pet => ({
    type: ADD_FOUND_PET,
    pet
});

export const postFoundPet = pet => ({
    type: POST_FOUND_PET,
    pet
});

export const fetchPets = () => ({
    type: FETCH_PETS
});

export const setPets = items => ({
    type: SET_PETS,
    items
});