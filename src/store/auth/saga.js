import { call, put } from 'redux-saga/effects';
import authService from '../../services/api/AuthService';
import {setLoggedUser, setRegisteredMessage} from './actions';

export function* logIn(action) {
    try {
        const response = yield call(authService.startLogin, action.user);
        if (response.status === 200) {
            yield put(setLoggedUser(response.data[0]));
        }
    } catch (error) {
        const { status } = error.response;
        yield put(setLoggedUser(status));
    }
}

export function* register(action) {
    try {
        const response = yield call(authService.startRegister, action.user);
        if (response.status === 200) {
            yield put(setRegisteredMessage('Successfully Registered'));
        }
    } catch (error) {
        const { status } = error.response;

        if (status === 409) {
            yield put (setRegisteredMessage('Username already exists'));
        } else if (status === 422) {
            yield put(setRegisteredMessage('Required fields must be filled'));
        } else {
            yield put(setRegisteredMessage('Error, something went wrong'));
        }
    }
}