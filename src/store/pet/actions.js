import {
  POST_FOUND_PET,
  FETCH_PETS,
  SET_PETS,
  FETCH_LOST_PETS,
  SET_LOST_PETS,
  POST_PET_AD,
  FETCH_ADOPTING_PETS,
  SET_ADOPTING_PETS,
  SET_FETCHING_LOST_PETS,
  SET_FETCHING_PETS,
  SET_FETCHING_ADOPTING_PETS,
  FETCH_PET_COMMENTS,
  FETCH_PET_AD_COMMENTS, SET_ADDING_FOUND_PET, SET_ADDING_PET_AD,
} from './constants';

export const postFoundPet = pet => ({
  type: POST_FOUND_PET,
  pet,
});

export const setAddingFoundPet = isAdding => ({
  type: SET_ADDING_FOUND_PET,
  isAdding
});

export const fetchPets = () => ({
  type: FETCH_PETS,
});

export const setPets = items => ({
  type: SET_PETS,
  items,
});

export const setFetchingPets = isFetching => ({
  type: SET_FETCHING_PETS,
  isFetching,
});

export const fetchLostPets = () => ({
  type: FETCH_LOST_PETS,
});

export const setLostPets = items => ({
  type: SET_LOST_PETS,
  items,
});

export const setFetchingLostPets = isFetching => ({
  type: SET_FETCHING_LOST_PETS,
  isFetching,
});

export const postPetAd = pet => ({
  type: POST_PET_AD,
  pet,
});

export const setAddingPetAd = isAdding => ({
  type: SET_ADDING_PET_AD,
  isAdding
});

export const fetchAdoptingPets = () => ({
  type: FETCH_ADOPTING_PETS,
});

export const setFetchingAdoptingPets = isFetching => ({
  type: SET_FETCHING_ADOPTING_PETS,
  isFetching,
});

export const setAdoptingPets = items => ({
  type: SET_ADOPTING_PETS,
  items,
});

export const fetchPetComments = petId => ({
  type: FETCH_PET_COMMENTS,
  petId
});

export const fetchPetAdComments = petId => ({
  type: FETCH_PET_AD_COMMENTS,
  petId
});