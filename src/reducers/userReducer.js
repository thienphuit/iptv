import {
  GET_USER,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
} from '../constants/ActionTypes/user';

const initUser = {
  profileUser: {},
  loading: false,
  errors: {},
};

const users = (state = initUser, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      const {response} = action;
      //console.log('object', response);
      return {
        ...state,
        profileUser: response,
        loading: false,
      };
    case GET_USER_ERROR:
      const {errors} = action;
      return {
        ...state,
        errors,
        loading: false,
      };
    default:
      return {...state};
  }
};
export default users;
