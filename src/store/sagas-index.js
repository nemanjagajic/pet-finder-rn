import { all, takeLatest } from 'redux-saga/effects';

import {LOG_IN, REGISTER} from './auth/constants';
import {logIn, register} from './auth/saga';

import {POST_FOUND_PET, FETCH_PETS, FETCH_PET_ADS} from './pet/constants'
import {postFoundPet, fetchPets, fetchPetAds} from "./pet/saga";

export default function* rootSaga() {
    yield all([
        takeLatest(LOG_IN, logIn),
        takeLatest(REGISTER, register),
        takeLatest(POST_FOUND_PET, postFoundPet),
        takeLatest(FETCH_PETS, fetchPets),
        takeLatest(FETCH_PET_ADS, fetchPetAds)
    ]);
}
