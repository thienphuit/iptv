import {FETCH_CHANNEL} from '../actions/channelAction'

const initState  = [];
const channels = (state = initState,action) =>{
    switch(action.type){
        case FETCH_CHANNEL:
            state = action.channels
            return [...state]
        default: 
        return [...state]    ; 
    }
}

export default channels;
