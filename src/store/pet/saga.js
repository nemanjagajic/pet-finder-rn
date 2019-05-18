/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import petService from '../../services/api/PetService';
import {
  setPets,
  setLostPets,
  setAdoptingPets,
  setFetchingPets, setFetchingLostPets, setFetchingAdoptingPets, setAddingFoundPet, setAddingPetAd,
} from './actions';
import {setComments, setIsFetchingComments} from "../comments/actions";

export function* fetchPets() {
  try {
    yield put(setFetchingPets(true));
    const response = yield call(petService.fetchPets);
    if (response.status === 200) {
      yield put(setPets(response.data));
      yield put(setFetchingPets(false));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* postFoundPet(action) {
  try {
    yield put(setAddingFoundPet(true));
    const { pet } = action;

    const postRequest = {
      userId: pet.user.id,
      image: pet.image,
      description: pet.description,
      latitude: pet.location.latitude,
      longitude: pet.location.longitude,
      street: pet.locationInfo.street,
      name: pet.locationInfo.name,
      country: pet.locationInfo.country,
      city: pet.locationInfo.city,
    };

    const response = yield call(petService.postPet, postRequest);

    if (response.status === 200) {
      yield call(fetchPets);
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setAddingFoundPet(false));
  }
}

export function* fetchLostPets() {
  try {
    yield put(setFetchingLostPets(true));
    const response = yield call(petService.fetchLostPets);
    if (response.status === 200) {
      yield put(setLostPets(response.data));
      yield put(setFetchingLostPets(false));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* fetchAdoptingPets() {
  try {
    yield put(setFetchingAdoptingPets(true));
    const response = yield call(petService.fetchAdoptingPets);
    if (response.status === 200) {
      yield put(setAdoptingPets(response.data));
      yield put(setFetchingAdoptingPets(false));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* postPetAd(action) {
  try {
    yield put(setAddingPetAd(true));
    const { pet } = action;

    const postRequest = {
      userId: pet.user.id,
      image: pet.image,
      description: pet.description,
      locationInfo: pet.locationInfo,
      phoneNumber: pet.phoneNumber,
      type: pet.type,
    };

    const response = yield call(petService.postPetAd, postRequest);

    if (response.status === 200) {
      if (pet.type === 1) {
        yield call(fetchLostPets);
      } else {
        yield call(fetchAdoptingPets);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setAddingPetAd(false));
  }
}

export function* fetchPetComments(action) {
  try {
    yield put(setIsFetchingComments(true));
    const response = yield call(petService.fetchPetComments, action.petId);
    yield put(setComments(response.data));
    yield put(setIsFetchingComments(false));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchPetAdComments(action) {
  try {
    yield put(setIsFetchingComments(true));
    const response = yield call(petService.fetchPetAdComments, action.petId);
    yield put(setComments(response.data));
    yield put(setIsFetchingComments(false));
  } catch (error) {
    console.log(error);
  }
}
