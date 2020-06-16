import {combineReducers} from 'redux';
import channels from './channelReducer';
import users from './userReducer';
import themovies from './themoviedb';
const appReducers = combineReducers({
  channels,
  users,
  themovies,
});

export default appReducers;
