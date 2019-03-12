import {
    ADD_FOUND_PET,
    POST_FOUND_PET,
    FETCH_PETS,
    SET_PETS,
    FETCH_LOST_PETS,
    SET_LOST_PETS,
    ADD_LOST_PET,
    POST_PET_AD,
    FETCH_ADOPTING_PETS,
    SET_ADOPTING_PETS,
    ADD_ADOPTING_PET, SET_FETCHING_LOST_PETS, SET_FETCHING_PETS, SET_FETCHING_ADOPTING_PETS
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

export const setFetchingPets = isFetching => ({
    type: SET_FETCHING_PETS,
    isFetching
});

export const fetchLostPets = () => ({
    type: FETCH_LOST_PETS
});

export const setLostPets = items => ({
   type: SET_LOST_PETS,
   items
});

export const setFetchingLostPets = isFetching => ({
    type: SET_FETCHING_LOST_PETS,
    isFetching
});

export const addLostPet = pet => ({
    type: ADD_LOST_PET,
    pet
});

export const postPetAd = pet => ({
    type: POST_PET_AD,
    pet
});

export const fetchAdoptingPets = () => ({
    type: FETCH_ADOPTING_PETS
});

export const setFetchingAdoptingPets = isFetching => ({
    type: SET_FETCHING_ADOPTING_PETS,
    isFetching
});

export const setAdoptingPets = items => ({
    type: SET_ADOPTING_PETS,
    items
});

export const addAdoptingPet = pet => ({
    type: ADD_ADOPTING_PET,
    pet
});