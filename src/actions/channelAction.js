//action types
export const FETCH_CHANNEL = 'FETCH_CHANNEL';


export const fetchChannelSuccess = (channels) => {
    return{
        type: 'FETCH_CHANNEL',
        channels,
    }
}

