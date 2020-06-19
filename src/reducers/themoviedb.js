import {
  GET_THEMOVIEDB,
  GET_THEMOVIEDB_SUCCESS,
  GET_THEMOVEDB_ERROR,
} from '../constants/ActionTypes/themoviedb';

const initState = {
  themovies: [],
  errors: {},
  loading: false,
};

const themovies = (state = initState, action) => {
  switch (action.type) {
    case GET_THEMOVIEDB:
      return {
        ...state,
        loading: true,
      };
    case GET_THEMOVIEDB_SUCCESS:
      const {response} = action;
      return {
        ...state,
        themovies: response,
        loading: false,
      };
    case GET_THEMOVEDB_ERROR:
      const {errors} = action;
      return {
        ...state,
        errors: errors,
        loading: false,
      };
    default:
      return state;
  }
};
export default themovies;
