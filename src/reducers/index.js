import {combineReducers} from 'redux';
import channels from './channelReducer';
import users from './userReducer';
const appReducers = combineReducers({
  channels,
  users,
});

export default appReducers;
