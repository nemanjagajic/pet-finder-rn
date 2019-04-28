/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';

import commentService from "../../services/api/CommentService";
import {fetchPetAdComments, fetchPetComments} from "../pet/actions";

export function* postPetComment(action) {
  try {
    const response = yield call(commentService.postPetComment, action.comment);
    if (response.status === 200) {
      yield put(fetchPetComments(action.comment.petId));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* postPetAdComment(action) {
  try {
    console.log(action);
    const response = yield call(commentService.postPetAdComment, action.comment);
    if (response.status === 200) {
      yield put(fetchPetAdComments(action.comment.petAdId));
    }
  } catch (error) {
    console.log(error);
  }
}