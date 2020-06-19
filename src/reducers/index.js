import {combineReducers} from 'redux';
import channels from './channelReducer';
import users from './userReducer';
import themovies from './themoviedb';
import updateChannel from './updateChannel';
const appReducers = combineReducers({
  channels,
  users,
  themovies,
  updateChannel,
});

export default appReducers;
