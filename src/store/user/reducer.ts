import { Constants, userActions } from './types';
import {userState} from "../../interfaces/user";

const init: userState = {
    name:'',
    lastName:'',
    phone:"",
    role:'',
    active:true
};

export function userReducer(state: userState = init, action: userActions): userState {
    switch (action.type) {
        case Constants.SET_USER:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
