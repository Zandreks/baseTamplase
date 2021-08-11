import {AxiosPromise} from "axios";

export interface userState {
    id?:number
    name:string,
    lastName?:string,
    phone:string,
    role?:string,
    active?: boolean
}

export interface apiUser{
    getUser():AxiosPromise
}
