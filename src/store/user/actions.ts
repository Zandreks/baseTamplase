import {Constants, userActions} from './types';
import {userState} from "../../interfaces/user";
import {Dispatch} from "redux";
import {AxiosResponse} from 'axios'
import {userApi} from "../../api/user";


export function addUser(user: userState):userActions {
    return {
        type:Constants.SET_USER,
        payload:user
    }
}
export const loadUser = ():(dispatch: Dispatch<userActions>) => Promise<void>=> {
   return async (dispatch: Dispatch<userActions>) => {
        try {
            const response:AxiosResponse = await userApi.getUser()
            const {data} = response

            dispatch(addUser(data))
        } catch (e) {

        }
    }
}
