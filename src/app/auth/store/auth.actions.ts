import { Action } from "@ngrx/store";
import { User } from "../user.interface";
export const TRY_LOGIN = 'TRY_LOGIN'
export const LOGIN = 'LOGIN'
export const TRY_CREATE_USER = 'TRY_CREATE_USER'
export const CREATE_USER = 'CREATE_USER'
export const CREATE_USER_PASSWORD = 'CREATE_USER_PASSWORD'
export const SEND_CREATE_USER_EMAIL = 'SEND_CREATE_USER_EMAIL'
export const AUTO_LOGIN = 'AUTO_LOGIN'
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER'
export const START_LOGOUT = 'START_LOGOUT'
export const LOGOUT = 'LOGOUT'
export class TryLogin implements Action {
    readonly type = TRY_LOGIN
    constructor(public payload: { email: string, password: string }) { }
}
export class Login implements Action {
    readonly type = LOGIN
    constructor(public payload: { token: string, currentUser: any }) { }
}
export class SendCreateUserEmail implements Action {
    readonly type = SEND_CREATE_USER_EMAIL
    constructor(public payload: User) { }
}
export class TryCreateUser implements Action {
    readonly type = TRY_CREATE_USER
    constructor(public payload: { email: string, password: string, username: string, password_confirmation: string }) { }
}
export class CreateUser implements Action {
    readonly type = CREATE_USER
}
export class CreateUserPassword implements Action {
    readonly type = CREATE_USER_PASSWORD
    constructor(public payload: { token: string, password: string, confirmPassword: string }) { }
}
export class AutomaticLogin implements Action {
    readonly type = AUTO_LOGIN
}
export class StartLogout implements Action {
    readonly type = START_LOGOUT
    constructor(public payload: { currentUser: any }) { }
}
export class Logout implements Action {
    readonly type = LOGOUT
}
export type AuthActions = TryCreateUser | CreateUser | StartLogout | Login | Logout | TryLogin | SendCreateUserEmail | CreateUserPassword | AutomaticLogin
