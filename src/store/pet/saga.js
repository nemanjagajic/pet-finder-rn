import { call, put } from 'redux-saga/effects';
import petService from '../../services/api/PetService';
import {setPets} from './actions'

export function* postFoundPet(action) {
    try {
        const pet = action.pet;

        const postRequest = {
            userId: 1,
            image: pet.image,
            description: pet.description,
            latitude: pet.location.latitude,
            longitude: pet.location.longitude,
            street: pet.locationInfo.street,
            name: pet.locationInfo.name,
            country: pet.locationInfo.country,
            city: pet.locationInfo.city
        };

        const response = yield call(petService.postPet, postRequest);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export function* fetchPets() {
    try {
        const response = yield call(petService.fetchPets);
        if (response.status === 200) {
            yield put(setPets(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}