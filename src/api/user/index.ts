import {apiUser} from "../../interfaces/user";
import axios, {AxiosPromise} from "axios";

export const userApi:apiUser = {
    getUser:  (): AxiosPromise =>  axios.get('https://jsonplaceholder.typicode.com/users/1')
}
