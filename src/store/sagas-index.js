import { all, takeLatest } from 'redux-saga/effects';

import {LOG_IN, REGISTER} from './auth/constants';
import {logIn, register} from './auth/saga';

import {POST_FOUND_PET, FETCH_PETS} from './pet/constants'
import {postFoundPet, fetchPets} from "./pet/saga";

export default function* rootSaga() {
    yield all([
        takeLatest(LOG_IN, logIn),
        takeLatest(REGISTER, register),
        takeLatest(POST_FOUND_PET, postFoundPet),
        takeLatest(FETCH_PETS, fetchPets)
    ]);
}
