import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { configForms } from 'src/app/util/form.class';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  public changeDataForm: FormGroup = new FormGroup({
    username: configForms.name(),
    email: configForms.email(),
    phoneNumber: configForms.phone(),
    fullName: configForms.required(),
    password: configForms.required(),
    description: configForms.required(),
  })
  constructor() { }

  ngOnInit(): void {
  }

  formInputData = [
    {
      formControlName: 'username', type: 'text', label: 'Username', placeholder: 'Username', id: 'username'
    }, {
      formControlName: 'email', type: 'email', label: 'Email', placeholder: 'Email', id: 'email'
    }, {
      formControlName: 'phoneNumber', type: 'number', label: 'Phone Number', placeholder: 'Phone Number', id: 'phoneNumber'
    }, {
      formControlName: 'password', type: 'password', label: 'Password', placeholder: 'Password', id: 'password'
    }
    ,
    {
      formControlName: 'fullName', type: 'text', label: 'FullName', placeholder: 'Full Name', id: 'fullName'
    },

    {

      formControlName: 'description', type: 'text', label: 'Description', placeholder: 'Bio description', id: 'description'
    }
  ]

  submitForm() {
    console.log(this.changeDataForm)

  }
}
