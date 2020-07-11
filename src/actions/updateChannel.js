import {
  UPDATE_CHANNEL,
  GET_DATA_FROM_FILE,
  SAVE_FILE,
} from '../constants/ActionTypes/updateChannel';

export const updateChannelLocal = newChannel => ({
  type: UPDATE_CHANNEL,
  newChannel,
});

export const getDataFromFile = () => ({
  type: GET_DATA_FROM_FILE,
});

export const saveFile = channels => ({
  type: SAVE_FILE,
  channels,
});
export const saveFileJson = () => {
  // require the module
  var RNFS = require('react-native-fs');
  var path = RNFS.DocumentDirectoryPath + '/channel.json';

  // RNFS.writeFile(path, JSON.stringify(channels), 'utf8')
  //   .then(success => {
  //     console.log('FILE WRITTEN! path: ', path);
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //   });
  // RNFS.readFile(path)
  //   .then(result => {
  //     console.warn('result: ', result); // debug
  //   })
  //   .catch(err => {
  //     console.log(err.message, err.code);
  //   });
};
