import {themoviedb} from '../constants/apis';
import {
  GET_THEMOVIEDB,
  GET_THEMOVIEDB_SUCCESS,
  GET_THEMOVEDB_ERROR,
} from '../constants/ActionTypes/themoviedb';
const getTheMovieDb = () => ({
  type: GET_THEMOVIEDB,
});

const getThemoveDbSuccess = response => ({
  type: GET_THEMOVIEDB_SUCCESS,
  response,
});

const getThemoveDbError = errors => ({
  type: GET_THEMOVEDB_ERROR,
  errors,
});

export const fetchTheMovieDb = () => {
  return dispatch => {
    dispatch(getTheMovieDb());
    fetch(themoviedb)
      .then(res => res.json())
      .then(res => {
        dispatch(getThemoveDbSuccess(res.results));
      })
      .catch(errors => {
        dispatch(getThemoveDbError(errors));
      });
  };
};
