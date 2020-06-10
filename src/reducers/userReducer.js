import {FETCH_USER} from '../constants/ActionTypes/userActionType';

const initUser = {}

const user = (state = initUser, action) => {
    switch(action.type){
        case FETCH_USER:
            state = action.user
            return {...state}
        default :
            return {...state}    
    } 
}
export default user