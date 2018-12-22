import { all, takeLatest } from 'redux-saga/effects';
import {LOG_IN} from './auth/constants';
import {logIn} from './auth/saga';

export default function* rootSaga() {
    yield all([
        takeLatest(LOG_IN, logIn)
    ]);
}
