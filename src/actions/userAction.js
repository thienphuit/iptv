import {FETCH_USER} from '../constants/ActionTypes/userActionType';

export const fetchUser = (user) =>{
    return {
        type:FETCH_USER,
        user
    }
}