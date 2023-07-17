import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';
import { configForms } from 'src/app/util/form.class';
import * as fromApp from '../../store/app.reducer'
import * as AuthActions from '../store/auth.actions'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  public signup: FormGroup = new FormGroup({
    email: configForms.email(),
    password: configForms.required(),
  })
  ngOnInit(): void {


    // this.store.dispatch(new AuthActions.TryLogin({ email: "benji@gmail.com", password: "Adex456@12" }))

  }
}
