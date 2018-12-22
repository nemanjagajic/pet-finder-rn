import { call, put } from 'redux-saga/effects';
import authService from '../../services/api/AuthService';

export function* logIn(action) {
    try {
        const response = yield call(authService.startLogin, action.user);
        if (response.status === 200) {
            console.log('Success');
        }
    } catch (error) {
        const { status } = error.response;

        if (status === 401) {
            console.log('Wrong password')
        } else if (status === 404) {
            console.log('Doesn\'t exist')
        } else {
            console.log(error);
        }
    }
}