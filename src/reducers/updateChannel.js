import {
  UPDATE_CHANNEL,
  GET_DATA_FROM_FILE,
} from '../constants/ActionTypes/updateChannel';
import * as RNFS from 'react-native-fs';

var channelJson = require('../assets/channels/channel.json');
const initData = {
  channels: channelJson,
};
var path = RNFS.DocumentDirectoryPath + '/channel.json';

const updateChannel = (state = initData, action) => {
  switch (action.type) {
    case GET_DATA_FROM_FILE:
      // RNFS.readFile(path)
      //   .then(result => {
      //     console.warn('result: ', result); // debug
      //   })
      //   .catch(err => {
      //     console.log(err.message, err.code);
      //   });
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

    // write the file
    default:
      return state;
  }
};
export default updateChannel;
