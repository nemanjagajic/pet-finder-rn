import { call, put } from 'redux-saga/effects';
import authService from '../../services/api/AuthService';
import {setLoggedUser} from './actions';

export function* logIn(action) {
    try {
        const response = yield call(authService.startLogin, action.user);
        if (response.status === 200) {
            yield put(setLoggedUser(action.user));
        }
    } catch (error) {
        const { status } = error.response;
        yield put(setLoggedUser(status));
    }
}