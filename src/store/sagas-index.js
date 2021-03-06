import { all, takeLatest } from 'redux-saga/effects';

import { LOG_IN, REGISTER } from './auth/constants';
import { logIn, register } from './auth/saga';

import {
  POST_FOUND_PET,
  FETCH_PETS,
  FETCH_LOST_PETS,
  POST_PET_AD,
  FETCH_ADOPTING_PETS,
  FETCH_PET_COMMENTS,
  FETCH_PET_AD_COMMENTS,
} from './pet/constants';
import {
  postFoundPet,
  fetchPets,
  fetchLostPets,
  postPetAd,
  fetchAdoptingPets,
  fetchPetComments,
  fetchPetAdComments,
} from './pet/saga';
import {POST_PET_AD_COMMENT, POST_PET_COMMENT} from "./comments/constants";
import {postPetAdComment, postPetComment} from "./comments/saga";
import {UPDATE_USER} from "./user/constants";
import {updateUser} from "./user/saga";

export default function* rootSaga() {
  yield all([
    takeLatest(LOG_IN, logIn),
    takeLatest(REGISTER, register),
    takeLatest(POST_FOUND_PET, postFoundPet),
    takeLatest(FETCH_PETS, fetchPets),
    takeLatest(FETCH_LOST_PETS, fetchLostPets),
    takeLatest(FETCH_ADOPTING_PETS, fetchAdoptingPets),
    takeLatest(POST_PET_AD, postPetAd),
    takeLatest(FETCH_PET_COMMENTS, fetchPetComments),
    takeLatest(FETCH_PET_AD_COMMENTS, fetchPetAdComments),
    takeLatest(POST_PET_COMMENT, postPetComment),
    takeLatest(POST_PET_AD_COMMENT, postPetAdComment),
    takeLatest(UPDATE_USER, updateUser)
  ]);
}
