import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { Store } from '@ngrx/store';
import { configForms } from 'src/app/util/form.class';
import * as fromApp from '../../store/app.reducer'
import * as AuthActions from '../store/auth.actions'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  public signup: FormGroup = new FormGroup({
    username: configForms.name(),
    email: configForms.email(),
    password_confirmation: configForms.required(),
    password: configForms.required(),
    terms_conditions: configForms.required(),
    cookies: configForms.required(),
  })


  ngOnInit(): void {
    // this.store.dispatch(new AuthActions.TryCreateUser(
    //   {
    //     "email": "segunibidokun@gmail.com",
    //     "username": "segundokun12",
    //     "password": "Adex456@12",
    //     "password_confirmation": "Adex456@12"
    //   }
    // ))

  }

}
