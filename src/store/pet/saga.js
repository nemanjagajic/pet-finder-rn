import { call, put } from 'redux-saga/effects';
import petService from '../../services/api/PetService';
import {setPets, addFoundPet, setPetAds, addLostPet} from './actions'

export function* postFoundPet(action) {
    try {
        const pet = action.pet;

        const postRequest = {
            userId: pet.user.id,
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
        const date = new Date();
        if (response.status === 200) {
            yield put(addFoundPet({
                ...postRequest,
                id: response.data.id,
                created_at: `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}-${(date.getDate()) < 10 ? '0' : ''}${date.getDate()} ${(date.getHours()) < 10 ? '0' : ''}${date.getHours()}:${(date.getMinutes()) < 10 ? '0' : ''}${date.getMinutes()}:${(date.getSeconds()) < 10 ? '0' : ''}${date.getSeconds()}`
            }));
        }
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

export function* fetchPetAds() {
    try {
        const response = yield call(petService.fetchPetAds);
        if (response.status === 200) {
            yield put(setPetAds(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* postLostPet(action) {
    try {
        const pet = action.pet;

        const postRequest = {
            userId: pet.user.id,
            image: pet.image,
            description: pet.description,
            locationInfo: pet.locationInfo,
            phoneNumber: pet.phoneNumber,
            type: 1
        };

        console.log(postRequest);

        const response = yield call(petService.postPetAd, postRequest);
        const date = new Date();
        if (response.status === 200) {
            yield put(addLostPet({
                ...postRequest,
                id: response.data.id,
                created_at: `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? '0' : ''}${date.getMonth() + 1}-${(date.getDate()) < 10 ? '0' : ''}${date.getDate()} ${(date.getHours()) < 10 ? '0' : ''}${date.getHours()}:${(date.getMinutes()) < 10 ? '0' : ''}${date.getMinutes()}:${(date.getSeconds()) < 10 ? '0' : ''}${date.getSeconds()}`
            }));
        }
    } catch (error) {
        console.log(error);
    }
}