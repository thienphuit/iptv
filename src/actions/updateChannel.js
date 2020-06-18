import {
  UPDATE_CHANNEL,
  UPDATE_CHANNEL_SUCCESS,
  UPDATE_CHANNEL_FAIL,
} from '../constants/ActionTypes/updateChannel';

const updateChannel = () => ({
  type: UPDATE_CHANNEL,
});

/* const updateChannelSuccess = response => ({
  type: UPDATE_CHANNEL_SUCCESS,
  response,
});

const updateChannelFail = errors => ({
  type: UPDATE_CHANNEL_FAIL,
  errors,
}); */

const channelJson = require('../assets/channels/channel.json');

export const updateChannelLocal = id => ({
  type: UPDATE_CHANNEL,
  id,
});
