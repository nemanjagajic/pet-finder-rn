import { all, takeLatest } from 'redux-saga/effects';
import {LOG_IN, REGISTER} from './auth/constants';
import {logIn, register} from './auth/saga';

export default function* rootSaga() {
    yield all([
        takeLatest(LOG_IN, logIn),
        takeLatest(REGISTER, register)
    ]);
}
