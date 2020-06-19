import {
  UPDATE_CHANNEL,
  GET_DATA_FROM_FILE,
} from '../constants/ActionTypes/updateChannel';

var channelJson = require('../assets/channels/channel.json');
const initData = {
  channels: channelJson,
};

const updateChannel = (state = initData, action) => {
  switch (action.type) {
    case GET_DATA_FROM_FILE:
      return {
        ...state,
        channelJson,
      };

    case UPDATE_CHANNEL:
      const {newChannel} = action;
      const channels = state.channels;
      channels[newChannel.channel_number] = newChannel;

      return {
        ...state,
        channels,
      };
    default:
      return state;
  }
};
export default updateChannel;
