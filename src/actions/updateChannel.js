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
