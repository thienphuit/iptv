import {UPDATE_CHANNEL} from '../constants/ActionTypes/updateChannel';

const initState = {
  channel: {},
};

const updateChannel = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CHANNEL:
      console.log(action);
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default updateChannel;
