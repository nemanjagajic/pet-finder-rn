import {ADD_FOUND_PET, POST_FOUND_PET, FETCH_PETS, SET_PETS, FETCH_PET_ADS, SET_PET_ADS} from "./constants";

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

export const fetchPetAds = () => ({
    type: FETCH_PET_ADS
});

export const setPetAds = items => ({
   type: SET_PET_ADS,
   items
});