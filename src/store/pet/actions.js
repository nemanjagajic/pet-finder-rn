import {ADD_FOUND_PET} from "./constants";

export const addFoundPet = pet => ({
    type: ADD_FOUND_PET,
    pet
});