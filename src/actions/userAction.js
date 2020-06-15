import {
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from '../constants/ActionTypes/user';

import {apiUser} from '../constants/apis';

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const getchUserError = errors => {
  return {
    type: GET_USER_ERROR,
    errors,
  };
};

export const getUserSusscess = response => {
  return {
    type: GET_USER_SUCCESS,
    response,
  };
};

export const fetchUser = () => {
  return dispatch => {
    dispatch(getUser());
    fetch(apiUser)
      .then(res => res.json())
      .then(res => {
        dispatch(getUserSusscess(res[0]));
      })
      .catch(errors => {
        dispatch(getchUserError(errors));
      });
  };
};
