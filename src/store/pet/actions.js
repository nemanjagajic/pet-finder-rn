import {
    ADD_FOUND_PET,
    POST_FOUND_PET,
    FETCH_PETS,
    SET_PETS,
    FETCH_LOST_PETS,
    SET_LOST_PETS,
    ADD_LOST_PET, POST_LOST_PET
} from "./constants";

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

export const fetchLostPets = () => ({
    type: FETCH_LOST_PETS
});

export const setLostPets = items => ({
   type: SET_LOST_PETS,
   items
});

export const addLostPet = pet => ({
    type: ADD_LOST_PET,
    pet
});

export const postLostPet = pet => ({
   type: POST_LOST_PET,
    pet
});