import {combineReducers} from 'redux';
import channels from './channelReducer';
import user from './userReducer';
const appReducers = combineReducers({
  channels,
  user,
});

export default appReducers;
