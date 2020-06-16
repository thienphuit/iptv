import {
  GET_MOVIES,
  GET_MOVIES_ERROR,
  GET_MOVIES_SUCCESS,
} from '../constants/ActionTypes/channel';

const initState = {
  link: [],
  errors: {},
  loading: false,
};
const channels = (state = initState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      const {response} = action;
      return {
        ...state,
        link: response,
        loading: false,
      };
    case GET_MOVIES_ERROR:
      const {errors} = action;
      return {
        ...state,
        errors,
        loading: false,
      };
    default:
      return state;
  }
};

export default channels;
