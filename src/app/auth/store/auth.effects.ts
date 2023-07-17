import { Actions, createEffect, ofType, } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import * as authActions from './auth.actions'
import { map, switchMap, mergeMap } from "rxjs/operators";
import { from, ObservableInput } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from "../user.interface";
import { MatDialog } from "@angular/material/dialog";
import { DialogMessageComponent } from "src/app/dialog-message/dialog-message.component";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects {
    constructor(
        private http: HttpClient,
        private actions$: Actions,
        private cookies: CookieService,
        private router: Router,
        private _dialog: MatDialog
    ) { }


    dialog(message: string) {
        this._dialog.open(DialogMessageComponent, {
            data: { message }
        })
    }

    authLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.TRY_LOGIN),
            map((action: authActions.TryLogin) => {
                return action.payload
            }),
            switchMap((authData: { email: string, password: string }) => {
                return from(this.http.post(`${environment.apiUrl}/login`, authData, { observe: 'response' }));
            }),

            switchMap((userData: any): ObservableInput<any> => {
                if (!userData) { return [] }
                return [

                    {
                        type: authActions.LOGIN,
                        payload: {
                            token: userData.token,
                            currentUser: userData.user
                        }
                    }
                ]
            })
        ));




    authSignUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.TRY_CREATE_USER),
            map((action: authActions.TryCreateUser) => {
                return action.payload
            }),
            switchMap((authData: { email: string, password: string, username: string, password_confirmation: string }) => {

                return from(this.http.post(`${environment.apiUrl}/register`, authData, { observe: 'response' }));
            }),

            switchMap((userData: any): ObservableInput<any> => {

                console.log(userData)

                if (!userData) { return [] }
                return [

                    {
                        type: authActions.LOGIN,
                        payload: {
                            token: userData.token,
                            currentUser: userData.user
                        }
                    }
                ]
            })
        ));
}