import {
  GET_MOVIES_ERROR,
  GET_MOVIES_SUCCESS,
  LOADING,
  GET_MOVIES,
} from '../constants/ActionTypes/channel';

import {movies} from '../constants/apis';

//action handle loading
const isLoading = isLoading => ({
  type: LOADING,
  isLoading,
});

const getMovies = () => ({
  type: GET_MOVIES,
});

const getMoviesSuccess = response => ({
  type: GET_MOVIES_SUCCESS,
  response,
});

const getMoviesError = errors => ({
  type: GET_MOVIES_ERROR,
  errors,
});

export const fetchMovies = () => {
  return dispatch => {
    dispatch(getMovies());
    fetch(movies)
      .then(res => res.json())
      .then(response => {
        dispatch(getMoviesSuccess(response.movies));
      })
      .catch(errors => {
        dispatch(getMoviesError(errors));
      });
  };
};
