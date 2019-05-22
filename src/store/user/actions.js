import {SET_UPDATING_USER, UPDATE_USER} from "./constants";

export const updateUser = (user, id) => ({
  type: UPDATE_USER,
  user,
  id
});

export const setUpdatingUser = isUpdating => ({
  type: SET_UPDATING_USER,
  isUpdating
});