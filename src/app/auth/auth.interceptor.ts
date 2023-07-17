import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer'


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private store: Store<fromApp.AppState>,

    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler,) {
        let token: string = "";

        this.store.select('AuthState').subscribe(
            (response: any) => {
                console.log(response)
                token = response.token


            }
        )

        const authReq = req.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Channel': `web`
            })
        })
        // .clone({ withCredentials: true })

        return next.handle(authReq)
    }
}