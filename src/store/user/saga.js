/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import userService from "../../services/api/UserService";
import {setUpdatingUser} from "./actions";
import {setLoggedUser} from "../auth/actions";

export function* updateUser({ user, id }) {
  try {
    yield put(setUpdatingUser(true));
    const response = yield call(userService.update, {...user, id});
    yield put(setLoggedUser(response.data[0]));
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setUpdatingUser(false));
  }
}