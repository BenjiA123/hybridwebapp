import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  public isAuth: boolean = false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.store.select('AuthState').subscribe(
      (data: any) => {
        this.isAuth = data.isAuthenticated;
      }
    )
    return this.isAuth;
  }

}
